document.querySelectorAll('.popup_join .popup-close').forEach(close => {
  close.addEventListener('click', (e) => {
    document.querySelector(`.popup_join`).classList.remove('popup_active');
    document.querySelector('body').classList.remove('hidden');
  });
});

document.querySelector('.popup_join .popup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  document.querySelector(`.popup_join`).classList.remove('popup_active');
  document.querySelector('body').classList.remove('hidden');

  document.querySelector(`.popup_success`).classList.add('popup_active');
  document.querySelector('body').classList.add('hidden');

  // fetch('http://localhost/', {
  //   method: 'POST',
  //   body: formData
  // }).then(() => {
  //   console.log('Успех');
  // }).catch((error) => {
  //   console.error('Ошибка:', error);
  // })
});
