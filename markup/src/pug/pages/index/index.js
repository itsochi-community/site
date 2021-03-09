import './index.scss';
import 'src/pug/components/sections/events/events';
import 'src/pug/components/sections/blog/blog';
import 'src/pug/components/sections/instagram/instagram';
import 'src/pug/components/layout/mobileMenu/mobileMenu';
import 'src/pug/components/sections/mission/mission';
import 'src/pug/components/sections/blog/blog';
import 'src/pug/components/layout/menu/menu';
import 'src/pug/components/popups/join/join';
import 'src/pug/components/popups/success/success';

document.querySelectorAll('.open-popup').forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelector(`.popup_join`).classList.add('popup_active');
    document.querySelector('body').classList.add('hidden');
  });
});
