const burger = document.getElementById('burger')
const headerNav = document.getElementById('headerNav')

//Mobile menu
burger.addEventListener('click', e => {
  burger.classList.toggle('active')
  headerNav.classList.toggle('active-nav')
})

// Chart
let ctx = document.getElementById('myChart').getContext('2d')
let chart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: [
      'Adobe XD',
      'After Effects',
      'Adobe Photoshop',
      'Adobe Illustrator'
    ],
    datasets: [
      {
        label: 'Our company top skills',
        backgroundColor: 'white',
        borderColor: '#4d4d4d',
        data: [3, 5, 4, 5, 0]
      }
    ]
  }
})

// Slide

let swiper = new Swiper('.swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
