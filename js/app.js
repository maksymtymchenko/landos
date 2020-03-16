const burger = document.getElementById('burger')
const headerNav = document.getElementById('headerNav')

burger.addEventListener('click', e => {
  burger.classList.toggle('active')
  headerNav.classList.toggle('active-nav')
})
