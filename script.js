// console.log("Its wroking");

let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('grey')
}
else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		// console.log("optional clicked", mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'grey') {
		document.getElementById('theme-style').href='style.css'
	}
	if (mode == 'dark') {
		document.getElementById('theme-style').href='dark.css'
	}
	if (mode == 'purple') {
		document.getElementById('theme-style').href='purple.css'
	}
	if (mode == 'blue') {
		document.getElementById('theme-style').href='blue.css'
	}

	localStorage.setItem('theme', mode)
}