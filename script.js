let alertEl = document.getElementById("Alert");
let input = document.getElementById("todoText");

function updateEl(event) {
  const taskDiv = event.target.closest(".tasks");
  const taskTextEl = taskDiv.querySelector(".tasktext");

  if (taskTextEl) {
    taskTextEl.classList.add("done");
  }

  alertEl.textContent = "Task Completed ";
  alertEl.style.color = "greenyellow";

  setTimeout(() => {
    alertEl.textContent = "";
  }, 1000);
}

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alertEl.textContent = "Enter a text!";
    alertEl.style.color = "red";
    return
  }
  const taskDiv = document.createElement("div");
  taskDiv.className = "tasks";

  taskDiv.innerHTML = `
    <div class="tasktext">${taskText}</div>
    <i class="fa-solid fa-check" onclick="updateEl(event)"></i>
    <i class="fa-solid fa-trash"></i>
  `;

  document.querySelector(".container").appendChild(taskDiv);
  input.value = "";
}
function deleteEl(event1) {
    const taskDiv = event1.target.parentElement
    if (taskDiv) {
      taskDiv.remove();
      alertEl.textContent = "Deleted task!";
      alertEl.style.color = "red";
    }
  }