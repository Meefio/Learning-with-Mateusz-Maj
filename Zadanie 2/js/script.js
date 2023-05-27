document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function shadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('nav-shadow')
		} else {
			nav.classList.remove('nav-shadow')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', shadow)
})
