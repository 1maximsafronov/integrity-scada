// входная точка для сборки js файлов

console.log(`Скрипты подключены`);


const pageNav = document.querySelector(`.page-header__nav`);
const navToggle = pageNav.querySelector(`.page-header__nav-toggle`);

navToggle.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  pageNav.classList.toggle(`page-header__nav--closed`);
})
