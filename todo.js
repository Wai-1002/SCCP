//出来た
const taskInput = document.getElementById("taskInput")
const tasks = document.getElementById("task")
const showButton = document.getElementById("showButton")
let taskArray = []
let id = 0

showButton.addEventListener("click", function() {
  const taskText = taskInput.value
  const task = {
    text: taskText,
    id: id
  }
  taskInput.value = ""
  id++
  taskArray = [...taskArray, task]
  update()
})

function update() {
  while (tasks.firstChild !== null) {
    tasks.removeChild(tasks.firstChild)
  }
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i]
    const taskDiv = document.createElement("div")
    taskDiv.className = "taskContainer"
    const taskP = document.createElement("p")
    taskP.textContent = task.text
    taskDiv.appendChild(taskP)

    const deleteButton = document.createElement("input")
    deleteButton.type = "button"
    deleteButton.value = "削除"
    deleteButton.addEventListener("click", function() {
      taskArray = taskArray.filter(t => t.id != task.id)
      update()
    })
    taskDiv.appendChild(deleteButton)
    tasks.appendChild(taskDiv)
  }
}