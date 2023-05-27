const btn = document.querySelector('.count')
const err = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const costSpan = document.querySelector('.cost')

const CheckBill = () => {
	if (price.value !== '' && price.value !== '0' && people.value !== '' && people.value !== '0'  && tip.value !== '0') {
		err.textContent = ''
		const cost = (parseFloat(price.value) + parseFloat(price.value) * parseFloat(tip.value)) / parseFloat(people.value)
		costInfo.style.display = 'block'
		costSpan.textContent = cost.toFixed(2)
	} else {
		err.textContent = 'Uzupełnij wszystkie pola'
		costInfo.style.display = 'none'
	}
}

btn.addEventListener('click', CheckBill)
