document.addEventListener("DOMContentLoaded", function () {
	const expenseForm = document.querySelector("#expense-form");
	const expenseName = document.querySelector("#expense-name");
	const expenseAmount = document.querySelector("#expense-amount");
	const expenseList = document.querySelector("#expense-list");
	const displayTotalAmount = document.querySelector("#total-amount");

	let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
	let totalAmount = calculateTotalAmount();

	if (expenses) {
		renderExpenses();
		updateTotal();
	}

	expenseForm.addEventListener("submit", (e) => {
		e.preventDefault();
		e.stopPropagation();
		validateAndAddInputs();
		saveInLocal();
		renderExpenses();
		updateTotal();
	});

	function validateAndAddInputs() {
		const name = expenseName.value.trim();
		const amount = Number(expenseAmount.value);
		if (name !== "" && !isNaN(amount) && amount > 0) {
			addExpense(name, amount);
			clearInput();
		} else {
			alert("check inputs!");
			clearInput();
		}
	}

	function clearInput() {
		expenseName.value = "";
		expenseAmount.value = "";
	}

	function calculateTotalAmount() {
		return expenses.reduce((acc, obj) => acc + obj["amount"], 0);
	}

	function addExpense(expense, amount) {
		const newExpense = { id: Date.now(), expense, amount };
		expenses.push(newExpense);
	}

	function saveInLocal() {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}

	function updateTotal() {
		totalAmount = calculateTotalAmount();
		displayTotalAmount.textContent = totalAmount.toFixed(2);
	}

	function renderExpenses() {
		expenseList.innerHTML = "";
		expenses.map((expense) => {
			const li = createLi(expense);
			li.addEventListener("click", (e) => deleteExpense(e));
			expenseList.appendChild(li);
			return 0;
		});
	}

	function createLi(obj) {
		const li = document.createElement("li");
		li.setAttribute("id", obj.id);
		li.innerHTML = `
		<div>${obj.expense} : $${obj.amount}</div>
		<button class="bg-red-700 px-2 py-1 rounded">Delete</button>
		`;
		li.className =
			"flex justify-between items-center min-w-[400px] bg-gray-700 px-1 py-2 rounded";
		return li;
	}

	function deleteExpense(e) {
		e.stopPropagation();
		if (e.target.tagName === "BUTTON") {
			const li = e.target.parentElement;
			console.log(li);
			expenses = expenses.filter((expense) => expense.id !== Number(li.id));
			saveInLocal();
			renderExpenses();
			updateTotal();
		} else {
			console.log(1);
		}
	}
});
