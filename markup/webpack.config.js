const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const argv = require('yargs').argv;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {getDirectoriesBasenames} = require('./utils/utils.js');

const isProd = argv.mode === 'production';

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  dist: path.resolve(__dirname, 'dist'),
  assets: path.resolve(__dirname, 'src', 'assets'),
  components: path.resolve(__dirname, 'src', 'components')
};

const PAGES_DIR = path.resolve(PATHS.src, 'pug', 'pages');
const PAGES = getDirectoriesBasenames(PAGES_DIR);

const entries = PAGES.reduce((acc, page, i) => {
  acc[page] = `./pug/pages/${page}/${page}.js`;
  return acc;
}, {});

const config = {
  mode: isProd ? 'production' : 'development',
  context: path.resolve(__dirname, 'src'),
  entry: entries,
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.scss', '.pug'],
    alias: {
      ...PATHS
    }
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devServer: {
    hot: false,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              basedir: path.resolve(__dirname, 'src'),
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
      chunkFilename: '[id].css'
    }),
    ...PAGES.map(page => {
      return new HtmlWebpackPlugin({
        template: `./pug/pages/${page}/${page}.pug`,
        excludeAssets: [/-critical.css$/],
        filename: `${page}.html`,
        chunks: [page]
      });
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: `${PATHS.assets}/img`, to: 'assets/img'},
        {from: `${PATHS.src}/static`, to: ''},
      ]
    })
  ]
};

module.exports = config;
