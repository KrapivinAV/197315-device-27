
let linkModal = document.querySelector('.popup-write-us__open');
let linkMap = document.querySelector('.popup-map__open');
  
let popupModal = document.querySelector('.popup-write-us');
let popupMap = document.querySelector('.popup-map');

let closeModal = popupModal.querySelector('.popup-write-us__close');
let closeMap = popupMap.querySelector('.popup-map__close');

let form = popupModal.querySelector('.popup-write-us__form');
let name = popupModal.querySelector('.popup-write-us__name-field');
let email = popupModal.querySelector('.popup-write-us__email-field');
let text = popupModal.querySelector('.popup-write-us__question-text');

let isStorageSupport = true;
let storageName = '';
let storageMail = '';

try {
  storageName = localStorage.getItem('name');
  storageMail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

linkModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModal.classList.add('popup-active');
  
  if (storageName) {
    name.value = storageName;
    email.value = storageMail;
    text.focus();
  } else {
      name.focus();
    }
});

linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('popup-active');
});

closeModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModal.classList.remove('popup-active');
  popupModal.classList.remove('popup-error');
  text.value = '';
});

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.remove('popup-active');
});

form.addEventListener('submit', function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    if (!name.value) {
      name.classList.add('field-invalid');
    }
    if (!email.value) {
      email.classList.add('field-invalid');
    }
    popupModal.classList.remove('popup-error');
    popupModal.offsetWidth = popupModal.offsetWidth;
    popupModal.classList.add('popup-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupModal.classList.contains('popup-active')) {
      popupModal.classList.remove('popup-active');
      popupModal.classList.remove('popup-error');
    }
    if (popupMap.classList.contains('popup-active')) {
      popupMap.classList.remove('popup-active');
    }
  }
});
