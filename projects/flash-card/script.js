const uiElements = {
	questionCard: document.getElementById("questionArea"),
	questionData: document.querySelector("[data-question]"),
	answerCard: document.getElementById("answerArea"),
	answerData: document.querySelector("[data-answer]"),
	prevBtn: document.getElementById("prevBtn"),
	nextBtn: document.getElementById("nextBtn"),
	showAnswerBtn: document.getElementById("showAnswerBtn"),
}

let flashCardsData = [];
let currentIndex = 0;
let isAnswerVisible = false;

async function loadQuestions() {
	const response = await fetch("data.json");
	flashCardsData = await response.json();
	console.log(flashCardsData);
	updateCard();
}

function updateCard() {
	const currentCard = flashCardsData[currentIndex];
	console.log(currentCard);
	uiElements.questionData.textContent = currentCard.question;
	if (isAnswerVisible) {
		uiElements.answerData.textContent = currentCard.correctAnswer;
		uiElements.answerCard.style.display = "block";
		uiElements.showAnswerBtn.textContent = "Hide Answer";
		uiElements.questionCard.style.display = "none";
	} else {
		uiElements.answerCard.style.display = "none";
		uiElements.questionCard.style.display = "block";
		uiElements.showAnswerBtn.textContent = "Show Answer";
	}
}

uiElements.showAnswerBtn.addEventListener("click", () => {
	isAnswerVisible = !isAnswerVisible;
	updateCard();
});

loadQuestions();