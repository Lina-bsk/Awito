'use strict';

const modalAdd = document.querySelector('.modal__add');
const addAd = document.querySelector('.add__ad');
const modalBtnSubmit = document.querySelector('.modal__btn-submit');
const modalSubmit = document.querySelector('.modal__submit');    

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', event => {
  const target = event.target;

  if(target.classList.contains('modal__close') || target === modalAdd) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
}) 

window.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (!modalAdd.classList.contains('hide')) {
      modalAdd.classList.add('hide');
    }
  }
})