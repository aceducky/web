// removeBtn.innerHTML = "<i class='fas fa-trash'></i>";
localStorage.clear();
const taskListHeader = document.querySelector("#task-list-header");
let completed = 0;
let totalTasks = 0;
function increaseCompleted() {
  completed++;
  document.querySelector("#completed").textContent = completed;
}
function decreaseCompleted() {
  completed--;
  document.querySelector("#completed").textContent = completed;
}

function increaseTotalTasks() {
  totalTasks++;
  document.querySelector("#total-tasks").textContent = totalTasks;
}
function decreaseTotalTasks() {
  totalTasks--;
  document.querySelector("#total-tasks").textContent = totalTasks;
}
function present(el) {
  document.body.appendChild(el);
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(tasks);
//load stored tasks
  //extend the doWork function somehow using prototype or "extends"

tasks.push([ "task 1", true ]);
console.log(tasks[0]); //output: {task 1: true}

/*im getting this error:
script.js:36 Uncaught TypeError: tasks[0].keys is not a function
    at script.js:36:22
    */

// let task = Array.from(tasks.keys())[0];

// tasks.set('task 2', true)
// tasks.set('task 3', true)
// tasks.set('task 4', true)
function doWork(task) {
  increaseTotalTasks();
  let task_el = document.createElement("div");
  task_el.setAttribute("class", "task-el");
  let task_label = document.createElement("label");
  task_label.setAttribute("class", "task-label");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  task_label.appendChild(checkbox);
  task_label.appendChild(document.createTextNode(task));

  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "x";
  removeBtn.setAttribute("class", "remove-btn");

  task_el.appendChild(task_label);
  task_el.appendChild(removeBtn);
  taskListHeader.append(task_el);

  removeBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    if (completed > 0) {
      decreaseCompleted();
    }
    decreaseTotalTasks();
  });

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.textDecoration = "line-through";
      increaseCompleted();
    } else {
      this.parentElement.style.textDecoration = "";
      if (completed > 0) {
        decreaseCompleted();
      }
    }
  });
}

for (const task of tasks) {
  doWork(task[0]);
}
