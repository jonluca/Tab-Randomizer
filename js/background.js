/**
 * Registers the onclick handler for the Chrome Extension icon, injects the content script into a sandboxed chrome extension environment
 */
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({}, tabs =>{
    const randID = Math.floor(Math.random() * tabs.length);
    chrome.tabs.update(tabs[randID].id, {highlighted: true});
  } );
});

