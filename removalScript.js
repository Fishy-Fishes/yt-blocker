console.log("exectuing...")

// domain checking
if(window.location.href.split("//")[1].split("/")[0] == "www.youtube.com") {
	// page checking
	// video player page
	if(window.location.href.split("?")[0].split("/")[3] == "watch") {
		// find and remove recommended video list on the side of the page
		let items = document.getElementById("items")
		if(items != undefined) {
			items.remove()
		}
	} 
	// homepage
	else if(window.location.href.split("?")[0].split("/")[3] == "") {
		// get array of avalible elements
		let ytElement = document.getElementsByTagName("ytd-two-column-browse-results-renderer")
		// compare element subpage ID to find the home page elements and remove them
		console.log("comparing")
		for(i in ytElement) {
			if(ytElement[i].getAttribute("page-subtype") == "home") {
				ytElement[i].remove()
				break
			}
		}
	}
}
