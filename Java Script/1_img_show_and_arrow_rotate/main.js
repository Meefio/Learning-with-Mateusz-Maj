const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')

const showImg = () => {
	img.classList.toggle('hide')
	if(img.classList.contains('hide')){
		arrowIcon.style.rotate = '180deg'
	} else {
		arrowIcon.style.rotate = '0deg'
	}
}


arrowBtn.addEventListener('click', showImg)