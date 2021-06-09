chrome.webNavigation.onDOMContentLoaded.addListener(callRemoveScript);
chrome.webNavigation.onHistoryStateUpdated.addListener(callRemoveScript);

function callRemoveScript(details) {
	chrome.scripting.executeScript({
		target: {
			tabId: details.tabId
		},
		files: ["removalScript.js"]
	})
}
