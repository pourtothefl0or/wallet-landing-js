// === BLOG SLIDER ===
import Swiper, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

let blogSwiper
const breakpoint = window.matchMedia('(min-width:1024px)')

function initSwiper() {
  blogSwiper = new Swiper('.blog-slider', {
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.blog-slider__pagi',
      type: 'bullets',
      clickable: true,
      bulletClass: 'card-pagi__item',
      bulletActiveClass: 'card-pagi__item--active',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
  })
}

function watchBreakpoint() {
  if (breakpoint.matches === true) {
    if (blogSwiper !== undefined) blogSwiper.destroy(true, true)
  } else if (breakpoint.matches === false) {
    initSwiper()
  }
}

breakpoint.addListener(watchBreakpoint)
watchBreakpoint()
