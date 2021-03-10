# Сайт ИТ-сообщества Сочи

#### Локальная разработка
    npm install
    npm run dev

В разработке используется шаблонизатор Pug в связке с BEM
Ссылка на документацию : [bemto.pug](https://github.com/kizu/bemto)

### Сборка проекта
Продакшен версия

    npm run build:prod

Без оптимизации

    npm run build:dev

### Deploy
- В файле package.json необходимо изменить "homepage"
    
     
    npm run deploy


###### Утилиты
Создание компонента

    npm run create::component <NAME>

Создание страницы

    npm run create::page <NAME>
