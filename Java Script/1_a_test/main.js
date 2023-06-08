const allLi = document.querySelectorAll('li')
let number = 1

allLi.forEach(liItem => {
	liItem.textContent = number
	liItem.dataset.id = number
	number++
})

const thirdLi = document.querySelector('[data-id = "3"]')

console.log(thirdLi.closest('.wrapper'))

console.time()