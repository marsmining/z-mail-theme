var cdn = 'https://d16psrqvoeay1v.cloudfront.net'
var urlLogoDark = cdn + '/z-logo-dark.svg'
var urlLogoLight = cdn + '/z-logo-light.svg'

function setLogo(useDarkLogo) {
  var url = useDarkLogo ? urlLogoDark : urlLogoLight

  var el = document.querySelector('a[title=Mail]').firstChild

  el.style.backgroundImage = 'url("' + url + '")'
  el.style.marginTop='17px'
}

chrome.storage.sync.get(null, function (s) {
  setLogo(s.useDarkLogo)
})

chrome.storage.onChanged.addListener(function (changes) {
  for (var key in changes) {
    var storageChange = changes[key]
    if (key === 'useDarkLogo') {
      setLogo(storageChange.newValue)
    }
  }
})
