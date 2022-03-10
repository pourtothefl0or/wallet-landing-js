// === MENU ===
const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', () => {
  body.classList.toggle('scroll-disabled')
  menuBtn.classList.toggle('active')
  menu.classList.toggle('visible')
})
