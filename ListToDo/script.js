const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-task");
const inputTask = document.getElementById("task-input");

function addTask() {
  if (inputTask.value === "") {
    alert("Ajouter une tâche");
  } else {
    let li = document.createElement("li");
    li.textContent = inputTask.value;
    taskList.appendChild(li);
    inputTask.value = ""; 
  }
}

inputTask.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
