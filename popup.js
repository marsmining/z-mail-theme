var btnDark = document.querySelector('.z-setting-dark')
var btnLight = document.querySelector('.z-setting-light')

function render(useDarkLogo) {
  if (useDarkLogo) {
    btnDark.classList.add('active')
    btnLight.classList.remove('active')
  } else {
    btnDark.classList.remove('active')
    btnLight.classList.add('active')
  }
}

chrome.storage.sync.get(null, function (s) {
  render(s.useDarkLogo)
})

btnDark.addEventListener('click', function () {
  chrome.storage.sync.set({ useDarkLogo: true })
  render(true)
})

btnLight.addEventListener('click', function () {
  chrome.storage.sync.set({ useDarkLogo: false })
  render(false)
})

setTimeout(function () {
  chrome.storage.sync.get(null, function (s) {
    render(s.useDarkLogo)
  })
}, 5000)
