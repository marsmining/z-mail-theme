chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    useDarkLogo: true
  })
})

chrome.tabs.onUpdated.addListener(function (id, info, tab) {
  if (tab.url.toLowerCase().indexOf('mail.google.com') > -1) {
    chrome.pageAction.show(tab.id)
  }
})
