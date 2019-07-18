/**
 * Randomly selects a tab and focuses on it
 */
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({}, tabs =>{
    const randID = Math.floor(Math.random() * tabs.length);
    chrome.tabs.update(tabs[randID].id, { active: true});
  } );
});

