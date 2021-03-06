
const customCSS = ".ytd-rich-grid-renderer, .ytd-item-section-renderer, .ytd-compact-video-renderer { opacity: 0; pointer-events: none; }";

const allowedPaths = ["/", "/watch"];

// add styling
function addStyle() {
	let styleElement = document.createElement("style");

	styleElement.id = "injected-css";

	styleElement.type = "text/css";

	styleElement.innerHTML = customCSS;

	document.lastChild.appendChild(styleElement);
}

// remove styling
function removeStyle() {
	let styleElement = document.getElementById("injected-css");
	
	styleElement.parentNode.removeChild(styleElement);
}

// check if current url is allowed, and exectute accordingly
function checkAndUpdateStyle() {
	if(allowedPaths.includes(window.location.pathname)) {
		if(!document.getElementById("injected-css")) {
			addStyle();
		}
	} else if(document.getElementById("injected-css")) {
		removeStyle();
	}
}

// execute on load
checkAndUpdateStyle();

// add YT specific event listener for new pages
document.addEventListener("yt-navigate-start", checkAndUpdateStyle);
