const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#repeat-password')
const email = document.querySelector('#email')
const btnClear = document.querySelector('.clear')
const btnSend = document.querySelector('.send')
const btnClose = document.querySelector('.close')
const popup = document.querySelector('.popup')
const formBox = document.querySelectorAll('.form-box')


const showError = (input, msg) => {
	// input.parentElement.classList.add('error')
	// input.nextElementSibling.textContent = msg
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z ${min} znaków`)
	}
}
const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'hasła do siebie nie pasują')
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'e-mail jest niepoprawny')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box');
	let errorCount = 0;

	allInputs.forEach(el => {
		if(el.classList.contains('error')){
			errorCount++
		}
	})

	if(errorCount === 0) {
		popup.classList.add('show-popup')

	}
}

btnSend.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, pass, pass2, email])
	checkLength(username, 3)
	checkLength(pass, 8)
	checkPassword(pass, pass2)
	checkMail(email)
	checkErrors()
})

btnClear.addEventListener('click', e => {
	e.preventDefault();
	[username, pass, pass2, email].forEach(el => {
		el.value = ''
		clearError(el)
	})
})

// const checkUserName = () => {
// 	if (username.value.length > 0 && username.value.length <= 3) {
// 		username.closest('.form-box').classList.add('error')
// 	} else {
// 		username.closest('.form-box').classList.remove('error')
// 	}
// }

// username.addEventListener('keyup', checkUserName)
