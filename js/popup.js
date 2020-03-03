
var linkModal = document.querySelector('.popup-write-us__open');
var linkMap = document.querySelector('.popup-map__open');
  
var popupModal = document.querySelector('.popup-write-us');
var popupMap = document.querySelector('.popup-map');

var closeModal = popupModal.querySelector('.popup-write-us__close');
var closeMap = popupMap.querySelector('.popup-map__close');

var form = popupModal.querySelector('.popup-write-us__form');
var name = popupModal.querySelector('.popup-write-us__name-field');
var email = popupModal.querySelector('.popup-write-us__email-field');
var text = popupModal.querySelector('.popup-write-us__question-text');

var isStorageSupport = true;
var storageName = '';
var storageMail = '';

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
