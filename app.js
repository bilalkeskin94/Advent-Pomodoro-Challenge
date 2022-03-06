const minute = document.querySelector('.minutes input');
const second = document.querySelector('.seconds input');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const settings = document.querySelector('.settings');
const ring = document.querySelector('.ring');
const audio = new Audio(
	'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'
);
let minutes = parseInt(minute.value);
let seconds = parseInt(second.value);
let totalSeconds = minutes * 60 + seconds;
let currentSeconds = totalSeconds;

const pomodoroTimer = () => {
	let interval = setInterval(() => {
		stop.addEventListener('click', () => {
			clearInterval(interval);
			start.classList.remove('hidden');
			stop.classList.add('hidden');
            audio.play();
		});
		if (currentSeconds === 0) {
			clearInterval(interval);
			ring.style.stroke = 'red';
			return;
		}
		currentSeconds--;
		let minutesLeft = Math.floor(currentSeconds / 60);
		let secondsLeft = currentSeconds % 60;
		if (minutesLeft.toString().length === 1) {
			minutesLeft = '0' + minutesLeft;
		}
		if (secondsLeft.toString().length === 1) {
			secondsLeft = '0' + secondsLeft;
		}
		minute.value = minutesLeft;
		second.value = secondsLeft;
	}, 1000);
};

const startPomodoro = () => {
	start.addEventListener('click', () => {
		pomodoroTimer();
		start.classList.add('hidden');
		stop.classList.remove('hidden');
	});
};

const pomodoro = () => {
	startPomodoro();
};

pomodoro();
