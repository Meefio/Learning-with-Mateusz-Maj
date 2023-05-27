const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	if (
		pass.value.length >= minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'masz zajebiste hasło'
		p.style.color = 'lime'
	} else if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'masz dobre hasło'
		p.style.color = 'yellow'
	} else {
		p.textContent = 'weź coś wpisz więcej ziomek bo żenada'
		p.style.color = 'tomato'
	}
}

pass.addEventListener('keyup', showMsg)
