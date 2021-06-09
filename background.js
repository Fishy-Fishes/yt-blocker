chrome.webNavigation.onCompleted.addListener(details => {
	chrome.scripting.executeScript({
		target: {
			tabId: details.tabId
		},
		files: ["removalScript.js"]
	})
}, { url: [{ hostContains: "youtube.com"}]});