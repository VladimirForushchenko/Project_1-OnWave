'use strict'

const searchBtn = document.querySelector('.header__rightBar_search');
const blockInput = document.querySelector('.header__rightBar_items');

const addSearchInput = () => {

   const newBlock = document.createElement('input');
   newBlock.classList.add('search-input');
   blockInput.prepend(newBlock);
   newBlock.placeholder = `Search`;

}

searchBtn.addEventListener('click', () => {
   const searchInput = document.querySelector('.search-input');

   if (!searchInput) {
      addSearchInput()
   } else {
      searchInput.remove()
   }
});

const menuBurger = document.querySelector('.header__rightBar_menu');
const menuHide = document.querySelector('.nav__items');
const menuOldClass = document.querySelectorAll('.nav__item');

menuBurger.addEventListener('click', () => {

   menuHide.classList.toggle('responsive_menu');

})
