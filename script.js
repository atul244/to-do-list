// Get elements from the DOM
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add");

// Add a new task
addButton.addEventListener("click", function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="complete">Complete</button>
      <button class="remove">Remove</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

// Mark a task as complete or remove it
taskList.addEventListener("click", function(e) {
  if (e.target.classList.contains("complete")) {
    const taskItem = e.target.parentElement;
    taskItem.querySelector("span").classList.toggle("completed");
  } else if (e.target.classList.contains("remove")) {
    const taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
  }
});
