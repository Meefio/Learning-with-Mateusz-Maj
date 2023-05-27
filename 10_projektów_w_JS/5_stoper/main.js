const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')

const infoList = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 58

const handleStart = () => {
clearInterval(countTime)

	countTime = setInterval(() => {
		
		if (seconds <= 9) {
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds > 9 && seconds < 60) {
			stopwatch.textContent = `${minutes}:${seconds}`
		} else if (seconds = 60) {
            minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:0${seconds}`
		}
		seconds++
	}, 1000)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	console.log(countTime);
	clearInterval(countTime)
	time.style.visibility = 'visible'
	if (seconds <= 9) {
		time.textContent = `ostatni czas: ${minutes}:0${seconds}`
	} else if (seconds > 9 && seconds < 60) {
		time.textContent = `ostatni czas: ${minutes}:${seconds}`
	} else {
		time.textContent = `${minutes}:00`
	}
	seconds = 0
	minutes = 0
	stopwatch.textContent = '0:00'
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
