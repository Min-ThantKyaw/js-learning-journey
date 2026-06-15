const dob = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("resultBox");
const yearsSpan = document.getElementById("years");
const monthsSpan = document.getElementById("months");
const daysSpan = document.getElementById("days");
 
function renderResult(years, months, days) { 
	yearsSpan.textContent = years;
	monthsSpan.textContent = months;
	daysSpan.textContent = days;
	result.style.display = "block";
}
calculateBtn.addEventListener("click", function () {
	console.log("Button clicked");
	const birthDate = dob.valueAsDate;
	let years, months, days;
	if (birthDate) {
		const today = new Date();
		years = today.getFullYear() - birthDate.getFullYear();
		months = today.getMonth() - birthDate.getMonth();
		days = today.getDate() - birthDate.getDate();
		/**
			years = current_year - birth_year
			months = current_month - birth_month
			days = current_day - birth_day

			IF days < 0 THEN
				months = months - 1
				days = days + days_in_previous_month
			END IF

			IF months < 0 THEN
				years = years - 1
				months = months + 12
			END IF
		*/
		if (days < 0) {
			months -= 1;
			const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
			days += previousMonth.getDate();
		}
		if (months < 0) {
			years -= 1;
			months += 12;
		}
        renderResult(years, Math.abs(Number(months)), Math.abs(Number(days)));
    }
});