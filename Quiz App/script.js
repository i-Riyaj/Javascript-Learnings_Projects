document.addEventListener("DOMContentLoaded", () => {
	const startBtn = document.getElementById("start-btn");
	const questionContainer = document.querySelector("#question-container");
	const questionText = document.querySelector("#question-text");
	const choicesList = document.querySelector("#choices-list");
	const nextBtn = document.querySelector("#next-btn");
	const resultContainer = document.querySelector("#result-container");
	const restartBtn = document.querySelector("#restart-btn");
	const scoreDiv = document.querySelector("#score");

	const quizes = [
		{
			id: 1,
			question: "Name the National Animal of India",
			options: ["Tiger", "Lion", "Dear", "Wolf"],
			answer: "Tiger",
			score: 25,
		},
		{
			id: 2,
			question: "Name the National Bird of India",
			options: ["Sparrow", "Dove", "Peacock", "Parrot"],
			answer: "Peacock",
			score: 25,
		},
		{
			id: 3,
			question: "Who wrote Gitanjali?",
			options: [
				"Rabindranath Tagore",
				"APJ Abdul Kalam",
				"Sukumar Roy",
				"Satyajit Ray",
			],
			answer: "Rabindranath Tagore",
			score: 25,
		},
		{
			id: 3,
			question: "Who wrote the Wings of Fire?",
			options: [
				"APJ Abdul Kalam",
				"Rabindranath Tagore",
				"Sukumar Roy",
				"Satyajit Ray",
			],
			answer: "APJ Abdul Kalam",
			score: 25,
		},
	];

	let currentQuestionIndex = 0;
	let score = 0;

	startBtn.addEventListener("click", startQuiz);

	function startQuiz() {
		startBtn.classList.add("hidden");
		questionContainer.classList.remove("hidden");
		showQuestion();
	}

	function showQuestion() {
		questionText.textContent = quizes[currentQuestionIndex].question;
		choicesList.innerHTML = "";

		quizes[currentQuestionIndex].options.map((option) => {
			const li = createLi(option);
			li.addEventListener("click", () => selectOption(li, option));
			choicesList.appendChild(li);
		});
	}

	function selectOption(selectedLi, option) {
		//locking the clicking event once an option is selected
		const liList = document.querySelectorAll("ul#choices-list > li");
		liList.forEach((li) => (li.style.pointerEvents = "none"));

		nextBtn.classList.remove("hidden");

		//updating score when the clicked option is matching the answer
		if (option === quizes[currentQuestionIndex].answer) {
			score += quizes[currentQuestionIndex].score;
			selectedLi.classList.add("bg-green-700");
		} else {
			selectedLi.classList.add("bg-red-500");
		}
	}

	nextBtn.addEventListener("click", showNextQuestion);

	function showNextQuestion() {
		currentQuestionIndex++;
		if (currentQuestionIndex < quizes.length) {
			showQuestion();
			nextBtn.classList.add("hidden");
		} else {
			showResult();
		}
	}

	function showResult() {
		questionContainer.classList.add("hidden");
		nextBtn.classList.add("hidden");
		resultContainer.classList.remove("hidden");
		scoreDiv.textContent = score;
	}

	restartBtn.addEventListener("click", restart);

	function restart() {
		currentQuestionIndex = 0;
		score = 0;
		resultContainer.classList.add("hidden");
		startBtn.classList.remove("hidden");
		startQuiz();
	}

	function createLi(option) {
		const li = document.createElement("li");
		li.setAttribute("id", option);
		li.textContent = option;
		li.className =
			"bg-gray-700 rounded px-2 py-1 text-center hover:bg-blue-600";
		return li;
	}
});
