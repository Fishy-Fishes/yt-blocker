chrome.webNavigation.onDOMContentLoaded.addListener(callRemoveScript, { url: [{ hostContains: "youtube.com"}]);
chrome.webNavigation.onHistoryStateChanged().addListener(callRemoveScript, { url: [{ hostContains: "youtube.com"}]);

function callRemoveScript(details) {
	chrome.scripting.executeScript({
		target: {
			tabId: details.tabId
		},
		files: ["removalScript.js"]
	})
}
