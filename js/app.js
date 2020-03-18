const burger = document.getElementById('burger'),
  headerNav = document.getElementById('headerNav')
burger.addEventListener('click', e => {
  burger.classList.toggle('active'), headerNav.classList.toggle('active-nav')
})
let ctx = document.getElementById('myChart').getContext('2d'),
  chart = new Chart(ctx, {
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
  }),
  swiper = new Swiper('.swiper-container', {
    cssMode: !0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: { el: '.swiper-pagination' },
    mousewheel: !0,
    keyboard: !0
  })
