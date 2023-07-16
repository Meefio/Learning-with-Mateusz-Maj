const bannerBtn = document.querySelector('.banner__btn')
const bannerText = document.querySelector('.banner__text')
const bannerChevron = document.querySelector('.fa-chevron-down')
const navBtn = document.querySelector('.hamburger')
const sideMenu = document.querySelector('.side-menu')
const paypalSmallBanner = document.querySelector('.banner-paypal__text')
const paypalBtn = document.querySelector('.banner-paypal__btn')
const paypalExpanded = document.querySelector('.banner-paypal__expanded')
const paypalBtnIcon = document.querySelector('.banner-paypal__icon')
const stockMenu = document.querySelector('.stock__selected-li')
const stockLiBox = document.querySelector('.stock__li-box')
const API_URL = 'https://api.stockdata.org/v1/data/quote?symbols='
const API_KEY = '&api_token=JGB3f6aL6tyng2f8KOGq2YK0NdtlzChkP2zkV1ve'
let symbols = 'AAPL,TSLA,MSFT'
const url = API_URL + symbols + API_KEY
const stockPair = document.querySelectorAll('.stock__pair')
const stockFullName = document.querySelectorAll('.stock__full-name')
const stockPrice = document.querySelectorAll('.stock__price')
const percentChange = document.querySelectorAll('.stock__percent-change')
const stockMin = document.querySelectorAll('.stock__min')
const stockMax = document.querySelectorAll('.stock__max')
const progressBar = document.querySelectorAll('.stock__progress')
const progressArrow = document.querySelectorAll('.stock__progress-arrow')

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
	}

	// zresearchować throttling & debouncing
)


console.log(stockMenu.textContent);


const burgerFn = () => {
	navBtn.classList.toggle('is-active')
	sideMenu.classList.toggle('menu-show')
}

const handlePaypal = () => {
	paypalSmallBanner.classList.toggle('paypal-show')
	paypalExpanded.classList.toggle('paypal-show')
	paypalBtnIcon.classList.toggle('paypal-btn-rotate')
}
const getData = () => {
	axios.get(url).then(res => {
		const symbolData = res.data.data;
		let arrNumber = 0
		stockPair.forEach(elem => {
			elem.textContent = symbolData[arrNumber].ticker
			arrNumber++
		})
		arrNumber = 0
		stockFullName.forEach(elem => {
			elem.textContent = symbolData[arrNumber].name
			arrNumber++
		})
		arrNumber = 0
		stockPrice.forEach(elem => {
			elem.textContent = symbolData[arrNumber].price
			arrNumber++
		})
		arrNumber = 0
		percentChange.forEach(elem => {
			const percent = symbolData[arrNumber].day_change / symbolData[arrNumber].day_low
			elem.textContent = (percent * 100).toFixed(2) + '%'
			arrNumber++
		})
		arrNumber = 0
		stockMin.forEach(elem => {
			elem.textContent = symbolData[arrNumber].day_low
			arrNumber++
		})
		arrNumber = 0
		stockMax.forEach(elem => {
			elem.textContent = symbolData[arrNumber].day_high
			arrNumber++
		})
		arrNumber = 0
		progressBar.forEach(elem => {
			const percentChange = Math.floor(((symbolData[arrNumber].price - symbolData[arrNumber].day_low)/(symbolData[arrNumber].day_high - symbolData[arrNumber].day_low)*100))
			elem.style.width = percentChange + '%'
			console.log(percentChange)
			arrNumber++
		})
		arrNumber = 0
		progressArrow.forEach(elem => {
			const percentChange = Math.floor(((symbolData[arrNumber].price - symbolData[arrNumber].day_low)/(symbolData[arrNumber].day_high - symbolData[arrNumber].day_low)*100))
			elem.style.left = percentChange + '%'
			console.log(percentChange)
			arrNumber++
		})
	})
}
// getData()

navBtn.addEventListener('click', burgerFn)
bannerBtn.addEventListener('click', bannerShowHide)
paypalBtn.addEventListener('click', handlePaypal)
paypalSmallBanner.addEventListener('click', handlePaypal)
