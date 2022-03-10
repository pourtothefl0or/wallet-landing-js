// === BTN--ARROW ===
const btnArrow = document.querySelectorAll('.btn--arrow')

btnArrow.forEach((el) => {
  el.addEventListener('click', () => el.classList.toggle('active'))
})
