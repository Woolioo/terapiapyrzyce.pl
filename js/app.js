document.addEventListener(`DOMContentLoaded`, function () {
	const nav = document.querySelector('.navbar')

	const addShadow = () => {
		if (window.scrollY >= 250) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
})

setCookie = (cNAme, cValue, expDays) => {
	let date = new Date()
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
	const expires = 'expires=' + date.toUTCString()
	document.cookie = cNAme + '=' + cValue + ';' + expires + '; path=/'
}

getCookie = cName => {
	const name = cName + '='
	const cDecoded = decodeURIComponent(document.cookie)
	const cArr = cDecoded.split('; ')
	let value
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) value = val.substring(name.lenght)
	})

	return value
}

document.querySelector('#cookiesBtn').addEventListener('click', () => {
	document.querySelector('#cookies').style.display = 'none'
	setCookie('cookie', true, 14)
})

cookieMessage = () => {
	if (!getCookie('cookie')) document.querySelector('#cookies').style.display = 'block'
}

window.addEventListener('load', cookieMessage)
