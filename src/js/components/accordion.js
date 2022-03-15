// === ACCORDION ===
const accordion = document.querySelectorAll('.accordion')

if (accordion) {
  accordion.forEach((el) => {
    el.addEventListener('click', () => {
      if (!el.classList.contains('opened')) {
        accordion.forEach((item) => item.classList.remove('opened'))
        el.classList.add('opened')
      } else {
        el.classList.remove('opened')
      }
    })
  })
}
