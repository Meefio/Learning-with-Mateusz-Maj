const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fz = 36

const sizeUpFn = () => {
	if (fz < 50) {
		fz += 5
		p.style.fontSize = fz + 'px'
		console.log(fz)
	} else {
		return
	}
}

const SizeDownFn = () => {
	if (fz > 16) {
		fz -= 5
		p.style.fontSize = fz + 'px'
		console.log(fz)
	}
}

const changeColor = () => {
	const r = Math.floor(Math.random()*255)
	const g = Math.floor(Math.random()*255)
	const b = Math.floor(Math.random()*255)
	
	p.style.color = `rgb(${r}, ${g}, ${b})`
}


sizeUp.addEventListener('click', sizeUpFn)
sizeDown.addEventListener('click', SizeDownFn)
color.addEventListener('click', changeColor)
