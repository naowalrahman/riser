var contextMenuItem = {
    "id": "ris", 
    "title": "reverse image search",
    "contexts": ["image"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "ris" && clickData.srcUrl){
	var img = clickData.srcUrl;
	chrome.tabs.create({url: `https://images.google.com/searchbyimage?image_url=${img}`});
    }
})
