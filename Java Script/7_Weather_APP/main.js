//https://openweathermap.org/

const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=78394ef3d85ac9ca94ae70f2eb8b2c6f'
const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'toronto'
	const URL = API_LINK + city + API_KEY + API_UNITS

	axios.get(URL).then(res => {

		weather.textContent = res.data.weather[0].main

		temperature.textContent = res.data.main.temp.toFixed(1) + '℃'

		humidity.textContent = res.data.main.humidity + '%'

		cityName.textContent = res.data.name

		const weatherID = res.data.weather[0].id

		if (weatherID >= 200 && weatherID < 300) {
			photo.setAttribute('src', './img/thunderstorm.png')
		} else if (weatherID >= 300 && weatherID < 400) {
			photo.setAttribute('src', './img/drizzle.png')
		// } else if (weatherID >= 400 && weatherID <= 499) {
		// 	photo.setAttribute('src', './img/thunderstorm.png')
		} else if (weatherID >= 500 && weatherID < 600) {
			photo.setAttribute('src', './img/rain.png')
		} else if (weatherID >= 600 && weatherID < 700) {
			photo.setAttribute('src', './img/ice.png')
		} else if (weatherID >= 700 && weatherID < 800) {
			photo.setAttribute('src', './img/fog.png')
		} else if (weatherID == 800) {
			photo.setAttribute('src', './img/sun.png')
		} else if (weatherID > 800 && weatherID < 900) {
			photo.setAttribute('src', './img/cloud.png')
		} else {
		photo.setAttribute('src', './img/unknown.png')}
		warning.textContent = ''
		input.value = ''
	}).catch(() => warning.textContent = 'wpisz poprawną nazwę miasta')
}
getWeather()

button.addEventListener('click', getWeather)
input.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		getWeather()
	}
})
