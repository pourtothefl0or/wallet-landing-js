// === LOCATION ===
const locationPoint = document.querySelectorAll('.location-point')

if (locationPoint) {
  locationPoint.forEach((el) => {
    ['click', 'focus'].forEach((state) => {
      el.addEventListener(state, () => {
        locationPoint.forEach((item) => item.classList.remove('active'))
        el.classList.add('active')
      })
    })
  })
}
