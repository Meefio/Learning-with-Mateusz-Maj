const input = document.querySelector('.heading__input')
const li = document.querySelectorAll('li')

//sposób 1

// const searchEngine = () => {

// 		li.forEach(el => {
// 			if (el.textContent.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
// 				el.style.display = 'block'
// 			} else {
// 				el.style.display = 'none'
// 			}
// 		})
// }

// input.addEventListener('keyup', searchEngine)

//sposób 2

const filterList = () => {
	li.forEach(item => {
		const match = new RegExp(input.value, 'i').test(item.textContent)

		if (!match) {
			item.style.display = 'none'
		} else {
			item.style.display = 'block'
		}
	})
}

input.addEventListener('keyup', filterList)