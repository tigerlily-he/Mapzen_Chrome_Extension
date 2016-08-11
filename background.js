chrome.contextMenus.create({
      title: "Locate this place",
      id: "mapzen",
      contexts: ["selection"]
    });

chrome.contextMenus.onClicked.addListener(function () {
  chrome.tabs.create({url: "turn-by-turn.html"});
});
