const minutesElem = document.querySelector('#minutes');
const secondsElem = document.querySelector('#seconds');
const millisecondsElem = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', triggerTimer);

function triggerTimer() {
	interval = setInterval(() => {
		if (!isPaused) {
			milliseconds += 10

			if (milliseconds === 1000) {
				seconds++
				milliseconds = 0
			}

			if (seconds === 60) {
				minutes++
				seconds = 0
			}

			minutesElem.textContent = minutes
			secondsElem.textContent = seconds
			millisecondsElem.textContent = milliseconds
		}
	}, 10)
}
