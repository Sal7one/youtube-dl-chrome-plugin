chrome.browserAction.onClicked.addListener( function( tab ) {
  if( tab.url.substring( 0, 4 ) == 'http' ) {
    chrome.tabs.create({url: chrome.extension.getURL( 'main.html' ) + '?' + tab.url })
  } else if( tab.url.substring( 0, 6 ) == 'chrome' ) {
    chrome.tabs.create({url: chrome.extension.getURL( 'main.html' ) + '#Main'})
  }
});
