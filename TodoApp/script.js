const addTaskBtn = document.querySelector("#addTask");
const enterTaskField = document.querySelector("#enterTask");
const manageTodoField = document.querySelector("#manageTodo");

let tasks = [];

window.addEventListener("load", () => {
	const existingTasks = JSON.parse(localStorage.getItem("todos"));
	if (existingTasks.length >= 1) {
		existingTasks.map((task) => {
			tasks.push(task);
		});
	}
	tasks.map((obj) => displaytask(obj.task));
});

const removeTask = (e) => {
	const parent = e.target.parentElement;
	tasks = tasks.filter((obj) => {
		return obj["task"] !== parent.firstElementChild.textContent;
	});
	localStorage.setItem("todos", JSON.stringify(tasks));
	parent.remove();
};

const createDeleteBtn = () => {
	const button = document.createElement("button");
	button.textContent = "Delete";
	button.className = "bg-red-500 rounded px-4 py-2 text-2xl";
	button.addEventListener("click", (e) => removeTask(e));
	return button;
};

const strikeThrough = (e) => {
	e.target.classList.toggle("strike-through");
	e.target.nextElementSibling.classList.toggle("strike-through");
};

const createLi = (val) => {
	const li = document.createElement("li");
	li.textContent = val;
	li.className = "px-4 py-2 text-2xl font-bold w-[70%]";
	li.addEventListener("click", (e) => strikeThrough(e));
	return li;
};

const createUl = () => {
	const ul = document.createElement("ul");
	ul.className = "flex justify-between";
	return ul;
};

const displaytask = (task) => {
	const ul = createUl();
	const button = createDeleteBtn();
	const li = createLi(task);
	ul.appendChild(li);
	ul.appendChild(button);
	manageTodoField.appendChild(ul);
};

const manageTaskInput = () => {
	if (enterTaskField.value.length >= 3) {
		const task = enterTaskField.value;
		displaytask(task);
		tasks.push({
			id: tasks.length + 1,
			task: task,
		});
		localStorage.setItem("todos", JSON.stringify(tasks));
		enterTaskField.value = "";
	} else {
		enterTaskField.value = "";
		enterTaskField.placeholder = "need a valid task";
	}
};

addTaskBtn.addEventListener("click", manageTaskInput);

enterTaskField.addEventListener("keydown", function (e) {
	if (e.key == "Enter") {
		manageTaskInput();
	}
});
