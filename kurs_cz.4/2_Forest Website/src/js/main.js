const navBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')

const burgerFn = () => {
	navBtn.classList.toggle('is-active')
	navBtn.classList.toggle('btn-move')
	nav.classList.toggle('show')
}

navBtn.addEventListener('click', burgerFn)

allNavItems.forEach(navItem =>
	navItem.addEventListener('click', function () {
		navBtn.classList.remove('is-active')
		navBtn.classList.remove('btn-move')
		nav.classList.remove('show')
	})
)
