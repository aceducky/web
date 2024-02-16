// removeBtn.innerHTML = "<i class='fas fa-trash'></i>";
const taskListHeader = document.querySelector("#task-list-header");
let completed = 0
let inComplete = 0
function increaseCompleted() {
    completed++;
    document.querySelector('#completed') = completed
}

function increaseIncomplete() {
    inComplete++;
    document.querySelector('#inComplete') = inComplete
}
function present(el) {
    document.body.appendChild(el)
}

let tasks = new Map()
tasks.set('task 1', true)
tasks.set('task 2', true)
tasks.set('task 3', true)

// let task = Array.from(tasks.keys())[0];



// tasks.set('task 2', true)
// tasks.set('task 3', true)
// tasks.set('task 4', true)
function doWork(task) {
    let task_el = document.createElement('div')
    task_el.setAttribute('class', 'task-el')
    let task_label = document.createElement('label')
    task_label.setAttribute('class', 'task-label')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    task_label.appendChild(checkbox)
    task_label.appendChild(document.createTextNode(task))

    let removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'x';
    removeBtn.setAttribute('class', 'remove-btn')

    task_el.appendChild(task_label)
    task_el.appendChild(removeBtn)
    taskListHeader.append(task_el)

    removeBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    checkbox.addEventListener('click', function () {
        this.parentElement.style.textDecoration == 'line-through' ? (this.parentElement.style.textDecoration = 'none') : (this.parentElement.style.textDecoration = 'line-through');
      });

}

for (const task of tasks) {
    doWork(task[0])   
}
// for (let key of tasks.keys()) {
//     doWork(key)
// }
