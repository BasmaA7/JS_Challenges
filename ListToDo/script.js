const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-task");
const inputTask = document.getElementById("task-input");

function addTask() {
  if (inputTask.value === "") {
    alert("Ajouter une tâche");
  } 
  
  else {
    let li = document.createElement("li");
    li.textContent = inputTask.value;

    let deleteButton = document.createElement("button");
    deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600";
    deleteButton.textContent = "Supprimer";
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };

    taskList.appendChild(li);
    li.appendChild(deleteButton);
    inputTask.value = ""; 
  }
}

inputTask.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
