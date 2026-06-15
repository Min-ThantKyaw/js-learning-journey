const uiElements = {
	questionCard: document.getElementById("questionArea"),
	questionData: document.querySelector("[data-question]"),
	answerCard: document.getElementById("answerArea"),
	answerData: document.querySelector("[data-answer]"),
	prevBtn: document.getElementById("prevBtn"),
	nextBtn: document.getElementById("nextBtn"),
	showAnswerBtn: document.getElementById("showAnswerBtn"),
	progressInner: document.getElementById("progressInner"),
	progressText: document.getElementById("progressText"),
	progressCount: document.getElementById("progressCount"),
};

let flashCardsData = [];
let currentIndex = 0;
let isAnswerVisible = false;

function clampIndex(i) {
	return Math.max(0, Math.min(i, Math.max(0, flashCardsData.length - 1)));
}

function showEmptyState() {
	uiElements.questionData.textContent = "No flashcards available.";
	uiElements.answerData.textContent = "";
	uiElements.answerCard.style.display = "none";
	uiElements.showAnswerBtn.disabled = true;
	uiElements.prevBtn.disabled = true;
	uiElements.nextBtn.disabled = true;
	if (uiElements.progressInner) uiElements.progressInner.style.width = "0%";
	if (uiElements.progressText) uiElements.progressText.textContent = "0%";
	if (uiElements.progressCount) uiElements.progressCount.textContent = "0 of 0";
}

function updateProgress() {
	const total = flashCardsData.length;
	if (!total) return;
	const percent = Math.round(((currentIndex + 1) / total) * 100);
	if (uiElements.progressInner) uiElements.progressInner.style.width = `${percent}%`;
	if (uiElements.progressText) uiElements.progressText.textContent = `${percent}%`;
	if (uiElements.progressCount) uiElements.progressCount.textContent = `${currentIndex + 1} of ${total}`;
}

function updateNavButtons() {
	const total = flashCardsData.length;
	uiElements.prevBtn.disabled = currentIndex <= 0;
	uiElements.nextBtn.disabled = currentIndex >= total - 1 || total === 0;
}

function updateCard() {
	if (!Array.isArray(flashCardsData) || flashCardsData.length === 0) {
		showEmptyState();
		return;
	}

	currentIndex = clampIndex(currentIndex);
	const currentCard = flashCardsData[currentIndex] || { question: "", correctAnswer: "" };

	uiElements.questionData.textContent = currentCard.question || "";
	uiElements.answerData.textContent = currentCard.correctAnswer || "";

	if (isAnswerVisible) {
		uiElements.answerCard.style.display = "block";
		uiElements.questionCard.style.display = "none";
		uiElements.showAnswerBtn.textContent = "Hide Answer";
	} else {
		uiElements.answerCard.style.display = "none";
		uiElements.questionCard.style.display = "block";
		uiElements.showAnswerBtn.textContent = "Show Answer";
	}

	updateProgress();
	updateNavButtons();
}

async function loadQuestions() {
	try {
		const response = await fetch("data.json");
		if (!response.ok) throw new Error(`Failed to load data.json: ${response.status}`);
		const data = await response.json();
		flashCardsData = Array.isArray(data) ? data : [];
	} catch (err) {
		console.error(err);
		flashCardsData = [];
	}
	updateCard();
}

function setupEventListeners() {
	uiElements.showAnswerBtn.addEventListener("click", () => {
		isAnswerVisible = !isAnswerVisible;
		updateCard();
	});

	uiElements.nextBtn.addEventListener("click", () => {
		isAnswerVisible = false;
		currentIndex = clampIndex(currentIndex + 1);
		updateCard();
	});

	uiElements.prevBtn.addEventListener("click", () => {
		isAnswerVisible = false;
		currentIndex = clampIndex(currentIndex - 1);
		updateCard();
	});
}

setupEventListeners();
loadQuestions();
