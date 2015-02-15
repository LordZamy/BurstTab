chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.directive === 'getTabs') {
			chrome.tabs.query({}, function(tabs) {
				sendResponse({tabs: tabs});
			});
			return true;
		}
	}
);