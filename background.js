// run script when you move around the page and when the page is initally loaded
chrome.webNavigation.onDOMContentLoaded.addListener(callRemoveScript);
chrome.webNavigation.onHistoryStateUpdated.addListener(callRemoveScript);

function callRemoveScript(details) {
	// inject script on active tab
	chrome.scripting.executeScript({
		target: {
			tabId: details.tabId
		},
		files: ["removalScript.js"]
	})
}
