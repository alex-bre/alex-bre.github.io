document.getElementById('year').textContent = new Date().getFullYear()

document.querySelector('.theme-toggle').addEventListener('click', function () {
  var root = document.documentElement
  var current = root.getAttribute('data-theme')
  if (current !== 'light' && current !== 'dark')
    current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  var next = current === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try {
    localStorage.setItem('home.theme', next)
  } catch (e) {
    /* storage blocked: the choice lasts for this visit only */
  }
})
