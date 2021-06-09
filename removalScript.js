console.log("exectuing...")
console.log(window.location.href)

if(window.location.href.split("?")[0].split("/")[3] != "watch") {
	let yt = document.getElementById("primary")
	yt.parentNode.removeChild(yt)
} else {
	let items = document.getElementById("items")
	items.parentNode.removeChild(items)
}

console.log("sucess")