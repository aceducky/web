localStorage.clear();
const tasksListHeader = document.querySelector("#tasks-list-header");
const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const tasksCounterEl = document.querySelector("#tasks-counter");

function taskCounter() {
  let totalTasks = document.querySelectorAll(
    "#tasks-list-header .task-el"
  ).length;
  let completed = document.querySelectorAll(
    '#tasks-list-header .task-el input[type="checkbox"]:checked'
  ).length;

  if (totalTasks === 0) {
    tasksCounterEl.textContent = "No tasks";
  } else {
    tasksCounterEl.textContent = `Tasks Done: ${completed}/${totalTasks}`;
  }
}

taskCounter();
function present(el) {
  document.body.appendChild(el);
}

function addTask(task, state = false) {
  let task_el = document.createElement("div");
  task_el.setAttribute("class", "task-el");
  let task_label = document.createElement("label");
  task_label.setAttribute("class", "task-label");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = state;
  task_label.appendChild(checkbox);
  task_label.appendChild(document.createTextNode(task));

  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "x";
  removeBtn.setAttribute("class", "remove-btn");

  task_el.appendChild(task_label);
  task_el.appendChild(removeBtn);
  tasksListHeader.append(task_el);

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.textDecoration = "line-through";
    } else {
      this.parentElement.style.textDecoration = "";
    }
    taskCounter();
    console.log("here");
  });

  removeBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    taskCounter();
  });
}

function handleTaskInput() {
  let task = taskInput.value.trim();
  if (!task) {
    alert("Enter a task");
    return;
  }
  addTask(task, false);
  taskInput.value = "";
  taskCounter();
}

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleTaskInput();
  }
});
addBtn.addEventListener("click", handleTaskInput);
