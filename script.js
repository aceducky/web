const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const tasksListHeader = document.querySelector("#tasks-list-header");
let tasksList = new Map();
let completed_tasks = 0;
let incomplete_tasks = 0;

function increaseCompletedTasks() {
  completed_tasks++;
  document.querySelector("#completed-tasks").textContent = completed_tasks;
}

function increaseInCompleteTasks() {
  incomplete_tasks++;
  document.querySelector("#incomplete-tasks").textContent = incomplete_tasks; // Corrected element ID
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleAddTask();
  }
});

function handleAddTask() {
  let task = input.value.trim();
  if (!task) {
    alert("Enter a task");
    return;
  }
  tasksList.set(task, false);
  console.log(task);
  const task_el = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute('class','task_checkbox');

  let task_label = document.createElement("label");
  task_label.appendChild(checkbox);
  task_label.appendChild(document.createTextNode(task));

  let removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "remove-btn");
  removeBtn.innerHTML = "<i class='fas fa-trash'></i>";

  task_el.append(task_label, removeBtn);
  tasksListHeader.appendChild(task_el);
  increaseInCompleteTasks();
  input.value = "";

  // Moved event listeners inside handleAddTask function
  checkbox.addEventListener('change', function () {
    this.parentElement.style.textDecoration == 'line-through' ? (this.parentElement.style.textDecoration = 'none', increaseCompletedTasks()) : (this.parentElement.style.textDecoration = 'line-through', increaseInCompleteTasks());
  });

  removeBtn.addEventListener('click', (event) => { // Changed to arrow function and added event parameter
    event.currentTarget.parentElement.parentElement.remove();
    // Removed increaseCompletedTasks function call
  });
}

addBtn.addEventListener("click", handleAddTask);
