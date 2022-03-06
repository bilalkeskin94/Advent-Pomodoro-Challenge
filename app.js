const minute = document.querySelector('.minutes input');
const second = document.querySelector('.seconds input');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const settings = document.querySelector('.settings');
const ring = document.querySelector('.ring');
const audio = new Audio(
	'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'
);

const pomodoroTimer = () => {
	let minutes = parseInt(minute.value);
	let seconds = parseInt(second.value);
	let totalSeconds = minutes * 60 + seconds;
	let currentSeconds = totalSeconds;
	let interval = setInterval(() => {
		stop.addEventListener('click', () => {
			clearInterval(interval);
			settings.removeAttribute('disabled');
			start.classList.remove('hidden');
			stop.classList.add('hidden');
			audio.play();
		});
		if (currentSeconds === 0) {
			clearInterval(interval);
			alert('Time is up!');
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
		minute.setAttribute('disabled', true);
		second.setAttribute('disabled', true);
		settings.setAttribute('disabled', true);
	});
};

const editPomodoro = () => {
	settings.addEventListener('click', () => {
		minute.toggleAttribute('disabled');
		second.toggleAttribute('disabled');
		let minutes = parseInt(minute.value);
		let seconds = parseInt(second.value);
	});
};

const pomodoro = () => {
	startPomodoro();
	editPomodoro();
};

pomodoro();
