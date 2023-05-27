const ball = document.querySelector('img')
const input = document.querySelector('input')
const errorText = document.querySelector('.error')
const answers = [
	'tak',
	'nie wiem',
	'domyśl się',
	'a jak myślisz?',
	'jesteś dzbanem',
	'weź nie pierdol',
	'oczywiście',
	'no pewnie!',
	'dobry pomysł',
	'pakuj się',
]
const answer = document.querySelector('.answer')

// const generateAnswer = () => {
// 	ball.classList.add('animation')
// 	setTimeout(() => {
// 		ball.classList.remove('animation')

// 		if (input.value.slice(-1) === '?') {
// 			errorText.style.visibility = 'hidden'
// 			answer.style.visibility = 'visible'
// 			answer.textContent = 'Odpowiedź: ' + answers[Math.floor(Math.random() * 10)]

// 			errorText.textContent = ''
// 		} else if (input.value.length === 0) {
// 			errorText.style.visibility = 'visible'
// 			errorText.textContent = 'Wpisz pytanie'
// 			answer.style.visibility = 'hidden'
// 		} else {
// 			errorText.style.visibility = 'visible'
// 			errorText.textContent = 'Pytanie musi być zakończone znakiem "?"'
// 			answer.style.visibility = 'hidden'
// 		}
// 	}, 2000)
// }

const shakeBall = () => {
	ball.classList.add('animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	ball.classList.remove('animation')

	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		errorText.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		errorText.textContent = 'Pytanie musi być zakończone znakiem "?"'
		answer.textContent = ''
	} else {
		errorText.textContent = 'Musisz zadać jakieś pytanie'
		answer.textContent = ''
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answers.length)
	answer.innerHTML = `<span>Odpowiedź: <span> ${answers[number]}`
}

ball.addEventListener('click', shakeBall)
