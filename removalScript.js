console.log("exectuing...")

if(window.location.href.split("?")[0] != "watch") {
	let yt = document.getElementById("primary")
	yt.parentNode.removeChild(yt)
}

console.log("sucess")