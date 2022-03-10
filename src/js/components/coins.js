const coinsList = document.querySelector('.coins__list')
const btnArrow = document.querySelector('.coins__content .btn--arrow')

btnArrow.addEventListener('click', () => coinsList.classList.toggle('opened'))
