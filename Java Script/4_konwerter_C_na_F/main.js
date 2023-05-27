const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
let fahrenheit
let celsius

const CelcToFahr = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to: ${fahrenheit.toFixed(1)}°F`
	converter.value = ''
}

const fahrToCelc = () => {
	celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to: ${celsius.toFixed(1)} °C`
	converter.value = ''
}

const convertFn = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C' && converter.value !== 0) {
			CelcToFahr()
		} else {
			fahrToCelc(converter.value)
		}
	} else {
		result.textContent = 'wpisz wartość'
	}
}

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

const reset = () => {
	converter.value = ''
	result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', convertFn)
resetBtn.addEventListener('click', reset)
