// === ACCORDION ===
const accordion = document.querySelectorAll('.accordion')

accordion.forEach((el) => {
  el.addEventListener('click', () => {
    const target = el.classList
    if (!target.contains('opened')) {
      accordion.forEach((item) => item.classList.remove('opened'))
      target.add('opened')
    } else {
      target.remove('opened')
    }
  })
})
