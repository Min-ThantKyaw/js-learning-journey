const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');
const toggleFormatBtn = document.getElementById('formatToggle');

let is24HourFormat = false;
const padZero = (num) => num.toString().padStart(2, '0');

/**
 * Converts a 24-hour format hour to 12-hour format and determines the period (AM/PM).
 * @param {hour} hour 
 * @returns {hour: number, period: string}
 */
function convertTo12Hour(hour) {
	const period = hour >= 12 ? 'PM' : 'AM';
	const hour12 = hour % 12 || 12;

	return { hour: hour12, period: period };
}

/**
 * Renders the time on the display.
 * @param {time} time 
 */
function renderTime(time) {
	timeDisplay.textContent = time;
}

/**
 * Initializes the clock by getting the current time, formatting it based on the selected format, and rendering it on the display.
 * This function is called every second to update the time display.
 */
function initializeClock() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let timeString = "";

	if (!is24HourFormat) {

		const { hour, period } = convertTo12Hour(hours);
		hours = hour;
		timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${period}`;
	} else {

		timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
	}
	renderTime(timeString);
}

setInterval(initializeClock, 1000);
initializeClock();

/**
 * Toggles the button text based on the current time format. When the user clicks the button, it switches between 12-hour and 24-hour formats and updates the button text accordingly.
 */
function toggleFomatButtonText() {
	if (is24HourFormat) {
		toggleFormatBtn.textContent = 'Switch to 12-Hour Format';
	} else {
		toggleFormatBtn.textContent = 'Switch to 24-Hour Format';
	}
}

// Event listener for the format toggle button. When clicked, it toggles the time format and updates the clock display and button text.
toggleFormatBtn.addEventListener('click', () => {
	is24HourFormat = !is24HourFormat;
	initializeClock();
	toggleFomatButtonText();
});