// filled with list of tabs when browser action is invoked
var allTabs = [];

function getAllTabs(callback) {
	chrome.extension.sendMessage({directive: 'getTabs'}, function(response) {
		return callback(response.tabs);
	});
}

function switchToTab(tabId) {
	chrome.tabs.update(tabId, {active: true});
}

function closeTab(tabId) {
	chrome.tabs.remove(tabId);
}

function findInTabArray(tabId) {
	for(var i = 0; i < allTabs.length; i++) {
		if(allTabs[i].id === tabId) return i;
	}
	return -1;
}

var fuseOptions = {
	keys: ['title', 'url']
}