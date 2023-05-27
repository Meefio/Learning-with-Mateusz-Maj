const btnSizeUp = document.querySelector('.sizeUp')
const btnSizeDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const text = document.querySelector('p')

let fontSize = 36

const sizeUp = () => {
	if (fontSize < 55) {
		fontSize += 5
		text.style.fontSize = fontSize + 'px'
	}
}

const sizedown = () => {
	if (fontSize > 20) {
		fontSize -= 5
		text.style.fontSize = fontSize + 'px'
	}
}

const ChangeColor = () => {
	const r = Math.floor(Math.random()*255)
	const g = Math.floor(Math.random()*255)
	const b = Math.floor(Math.random()*255)
	text.style.color = `rgb(${r},${g},${b})`
}

btnSizeUp.addEventListener('click', sizeUp)
btnSizeDown.addEventListener('click', sizedown)
btnColor.addEventListener('click', ChangeColor)