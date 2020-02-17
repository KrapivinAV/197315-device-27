let popupMap = document.querySelector('.popup-map');
let popupWriteUs = document.querySelector('.popup-write-us');

let mapButton = document.querySelector('.popup-map__open');
mapButton.onclick = function() {
  popupMap.classList.add('popup-active');
};

let mapCloseButton = document.querySelector('.popup-map__close');
mapCloseButton.onclick = function() {
  popupMap.classList.remove('popup-active');
};

let writeUsButton = document.querySelector('.popup-write-us__open');
writeUsButton.onclick = function() {
  popupWriteUs.classList.add('popup-active');
};

let writeUsCloseButton = document.querySelector('.popup-write-us__close');
writeUsCloseButton.onclick = function() {
  popupWriteUs.classList.remove('popup-active');
};
