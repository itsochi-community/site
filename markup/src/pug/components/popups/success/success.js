document.querySelector('.popup_success .popup-close').addEventListener('click', () => {
  document.querySelector(`.popup_success`).classList.remove('popup_active');
  document.querySelector('body').classList.remove('hidden');
});


document.querySelector('.popup_success .button').addEventListener('click', () => {
  document.querySelector(`.popup_success`).classList.remove('popup_active');
  document.querySelector('body').classList.remove('hidden');
});
