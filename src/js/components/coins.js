// === COINS ===
const coinsList = document.querySelector('.coins__list')
const btnArrow = document.querySelector('.coins__content .btn--arrow')
const API_URL = 'https://api.coingecko.com/api/v3/'

btnArrow.addEventListener('click', () => coinsList.classList.toggle('opened'))

// --- API ---
async function getCoinsData(request) {
  const response = await fetch(API_URL + request)
    .then((response) => response.json())
  return response
}

getCoinsData('coins').then((items) => {
  const limit = 19

  for (let i = 0; i <= limit; i++) {
    const coinsItem = document.createElement('li')
    coinsItem.classList.add('coins__item')

    if (i !== limit) {
      coinsItem.innerHTML =
      `<a href="#" class="coins-card">
        <img class="coins-card__image" src="${items[i].image.small}" srcset="${items[i].image.large} 2x" alt="${items[i].name}">
        <h3 class="coins-card__abbr">${items[i].symbol}</h3>
        <p class="coins-card__name">${items[i].name}</p>
      </a>`
    } else {
      coinsItem.innerHTML = `<a href="#" class="coins__item-more">And many others</a>`
    }

    coinsList.append(coinsItem)
  }
})
