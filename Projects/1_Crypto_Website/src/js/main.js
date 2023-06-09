const bannerBtn = document.querySelector('.banner__btn')
const bannerText = document.querySelector('.banner__text')
const bannerChevron = document.querySelector('.fa-chevron-down')
const navBtn = document.querySelector('.hamburger')
const sideMenu = document.querySelector('.side-menu')
const paypalSmallBanner = document.querySelector('.banner-paypal__text')
const paypalBtn = document.querySelector('.banner-paypal__btn')
const paypalExpanded = document.querySelector('.banner-paypal__expanded')
const paypalBtnIcon = document.querySelector('.banner-paypal__icon')

const bannerShowHide = () => {
	if (bannerBtn.classList.contains('show')) {
		bannerText.textContent = '75% rachunków detalicznych CFD odnotowuje straty...'
		bannerBtn.classList.remove('show')
		bannerChevron.classList.add('rotate')
	} else {
		bannerText.innerHTML =
			'Kontrakty CFD są złożonymi instrumentami i wiążą się z dużym ryzykiem szybkiej utraty środków pieniężnych z powodu dźwigni finansowej. <strong> 75% rachunków inwestorów detalicznych odnotowuje straty pieniężne w wyniku handlu kontraktami CFD u niniejszego dostawcy CFD. </strong> Zastanów się, czy rozumiesz,jak działają kontrakty CFD i czy możesz pozwolić sobie na wysokie ryzyko utraty pieniędzy.'
		bannerBtn.classList.add('show')
		bannerChevron.classList.remove('rotate')
	}
}

window.addEventListener(
	'resize',
	function () {
		if (window.innerWidth > 600) {
			bannerBtn.classList.add('show')
			bannerText.innerHTML =
				'Kontrakty CFD są złożonymi instrumentami i wiążą się z dużym ryzykiem szybkiej utraty środków pieniężnych z powodu dźwigni finansowej. <strong> 75% rachunków inwestorów detalicznych odnotowuje straty pieniężne w wyniku handlu kontraktami CFD u niniejszego dostawcy CFD. </strong> Zastanów się, czy rozumiesz,jak działają kontrakty CFD i czy możesz pozwolić sobie na wysokie ryzyko utraty pieniędzy.'
			bannerChevron.classList.remove('rotate')
		}
	},

	// zresearchować throttling & debouncing
)

const burgerFn = () => {
	navBtn.classList.toggle('is-active')
	sideMenu.classList.toggle('menu-show')
}

const handlePaypal = () => {
	paypalSmallBanner.classList.toggle('paypal-show')
	paypalExpanded.classList.toggle('paypal-show')
	paypalBtnIcon.classList.toggle('paypal-btn-rotate')
}

navBtn.addEventListener('click', burgerFn)
bannerBtn.addEventListener('click', bannerShowHide)
paypalBtn.addEventListener('click', handlePaypal)
paypalSmallBanner.addEventListener('click', handlePaypal)
