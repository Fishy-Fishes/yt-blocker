console.log("exectuing...")

if(window.location.href.split("//")[1].split("/")[0] == "www.youtube.com") {
	if(window.location.href.split("?")[0].split("/")[3] == "watch") {
		let items = document.getElementById("items")
		console.log(items)
		if(items != undefined) {
			console.log("attempting removal")
			items.remove()
		}
	} else if(window.location.href.split("?")[0].split("/")[3] == "") {
		let ytElement = document.getElementsByTagName("ytd-two-column-browse-results-renderer")[0]
		if(ytElement != undefined) {
			ytElement.remove()
		}
	}
}
