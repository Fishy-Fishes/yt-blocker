console.log("exectuing...")

if(window.location.href.split("//")[1].split("/")[0] == "www.youtube.com") {
	if(window.location.href.split("?")[0].split("/")[3] == "watch") {
		let items = document.getElementById("items")
		items.parentNode.removeChild(items)
	} else if(window.location.href.split("?")[0].split("/")[3] == "") {
		let yt = document.getElementById("primary")
		yt.parentNode.removeChild(yt)
	}
}