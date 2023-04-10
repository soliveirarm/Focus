// add task input
const newTaskInput = document.querySelector("#new-task-input");
// <ul> that receives <li>
const taskList = document.querySelector(".task-list");

// section .completed-tasks
const completedTasksContainer = document.querySelector(".completed-tasks");
// ul .completed-tasks__list
const completedTasks = document.querySelector(".completed-tasks__list");

let tasksLocal = JSON.parse(localStorage.getItem("todos")) || [];
let completedTasksLocal =
  JSON.parse(localStorage.getItem("completedTodos")) || [];

// MARKS THE ITEM AS COMPLETED
function checkItem(checkbox, li, text) {
  text.classList.toggle("checked");

  if (checkbox.checked) {
    // Appends the task to the completed-tasks container
    completedTasks.appendChild(li);
  } else {
    // Appends the task to the task-list container
    taskList.appendChild(li);
  }
}

// MAIN FUNCTION THAT ADDS NEW TASKS TO THE DIV
function addNewTask() {
  if (newTaskInput.value == "") {
    alert("There's no text on the input");
  } else {
    // li
    let newTaskLi = document.createElement("li");
    newTaskLi.classList.add("list-item");

    // input inside li
    let newTaskText = document.createElement("p");
    newTaskText.classList.add("item-text");

    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(newTaskText);

    newTaskLi.appendChild(taskContainer);

    // adds <li> in the <ul>
    taskList.appendChild(newTaskLi);

    // creating the trash can element
    let trashCan = document.createElement("span");
    trashCan.classList.add("trash-can");
    trashCan.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    newTaskLi.appendChild(trashCan);

    // puts the input text into the <p>
    newTaskText.textContent = newTaskInput.value;
    tasksLocal.push(newTaskText.textContent);
    localStorage.setItem("todos", JSON.stringify(tasksLocal));

    // erases the text in the input
    newTaskInput.value = "";

    checkbox.addEventListener("click", () => {
      checkItem(checkbox, newTaskLi, newTaskText);
      if (checkbox.checked) {
        completedTasksLocal.push(newTaskText.textContent);
        localStorage.setItem(
          "completedTodos",
          JSON.stringify(completedTasksLocal)
        );
        let element = tasksLocal.indexOf(newTaskText.textContent);
        tasksLocal.splice(element, 1);
        localStorage.setItem("todos", JSON.stringify(tasksLocal));
      } else {
        tasksLocal.push(newTaskText.textContent);
        localStorage.setItem("todos", JSON.stringify(tasksLocal));

        let element = completedTasksLocal.indexOf(newTaskText.textContent);
        completedTasksLocal.splice(element, 1);
        localStorage.setItem(
          "completedTodos",
          JSON.stringify(completedTasksLocal)
        );
      }
    });

    // SHOWS THE ICONS WHEN HOVERING
    function showIconsOnHover() {
      trashCan.classList.toggle("active");
    }

    // show and hide the icons
    newTaskLi.addEventListener("mouseover", showIconsOnHover);
    newTaskLi.addEventListener("mouseout", showIconsOnHover);

    // REMOVES AN ITEM FROM THE LIST
    trashCan.addEventListener("click", () => {
      newTaskLi.remove();
      let element = tasksLocal.indexOf(newTaskText.textContent);
      let completedEl = completedTasksLocal.indexOf(newTaskText.textContent);
      tasksLocal.splice(element, 1);
      localStorage.setItem("todos", JSON.stringify(tasksLocal));

      completedTasksLocal.splice(completedEl, 1);
      localStorage.setItem(
        "completedTodos",
        JSON.stringify(completedTasksLocal)
      );
    });
  }
}

if (tasksLocal !== null) {
  tasksLocal.forEach((task, i) => {
    // li
    let newTaskLi = document.createElement("li");
    newTaskLi.classList.add("list-item");

    // input inside li
    let newTaskText = document.createElement("p");
    newTaskText.classList.add("item-text");

    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(newTaskText);

    newTaskLi.appendChild(taskContainer);

    // adds <li> in the <ul>
    taskList.appendChild(newTaskLi);

    // creating the trash can element
    let trashCan = document.createElement("span");
    trashCan.classList.add("trash-can");
    trashCan.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    newTaskLi.appendChild(trashCan);

    // puts the input text into the <p>
    newTaskText.textContent = task[i];
    if (tasksLocal.indexOf(newTaskText) !== -1) {
      tasksLocal.push(newTaskText.textContent);
      localStorage.setItem("todos", JSON.stringify(tasksLocal));

      checkbox.addEventListener("click", () => {
        checkItem(checkbox, newTaskLi, newTaskText);
        if (checkbox.checked) {
          completedTasksLocal.push(newTaskText.textContent);
          localStorage.setItem(
            "completedTodos",
            JSON.stringify(completedTasksLocal)
          );
          let element = tasksLocal.indexOf(newTaskText.textContent);
          tasksLocal.splice(element, 1);
          localStorage.setItem("todos", JSON.stringify(tasksLocal));
        } else {
          tasksLocal.push(newTaskText.textContent);
          localStorage.setItem("todos", JSON.stringify(tasksLocal));

          let element = completedTasksLocal.indexOf(newTaskText.textContent);
          completedTasksLocal.splice(element, 1);
          localStorage.setItem(
            "completedTodos",
            JSON.stringify(completedTasksLocal)
          );
        }
      });
    }

    if (completedTasksLocal !== null) {
      completedTasksLocal.forEach((completedTask, i) => {
        // li
        let newTaskLi = document.createElement("li");
        newTaskLi.classList.add("list-item");

        // input inside li
        let newTaskText = document.createElement("p");
        newTaskText.classList.add("item-text");

        let checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");

        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(newTaskText);

        newTaskLi.appendChild(taskContainer);

        // adds <li> in the <ul>
        taskList.appendChild(newTaskLi);

        // creating the trash can element
        let trashCan = document.createElement("span");
        trashCan.classList.add("trash-can");
        trashCan.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        newTaskLi.appendChild(trashCan);

        if (completedTasksLocal.indexOf(newTaskText) !== -1) {
          // puts the input text into the <p>
          newTaskText.textContent = completedTask[i];
          tasksLocal.push(newTaskText.textContent);
          localStorage.setItem("todos", JSON.stringify(tasksLocal));

          checkbox.addEventListener("click", () => {
            checkItem(checkbox, newTaskLi, newTaskText);
            if (checkbox.checked) {
              completedTasksLocal.push(newTaskText.textContent);
              localStorage.setItem(
                "completedTodos",
                JSON.stringify(completedTasksLocal)
              );
              let element = tasksLocal.indexOf(newTaskText.textContent);
              tasksLocal.splice(element, 1);
              localStorage.setItem("todos", JSON.stringify(tasksLocal));
            } else {
              tasksLocal.push(newTaskText.textContent);
              localStorage.setItem("todos", JSON.stringify(tasksLocal));

              let element = completedTasksLocal.indexOf(
                newTaskText.textContent
              );
              completedTasksLocal.splice(element, 1);
              localStorage.setItem(
                "completedTodos",
                JSON.stringify(completedTasksLocal)
              );
            }
          });
        }

        // SHOWS THE ICONS WHEN HOVERING
        function showIconsOnHover() {
          trashCan.classList.toggle("active");
        }

        // show and hide the icons
        newTaskLi.addEventListener("mouseover", showIconsOnHover);
        newTaskLi.addEventListener("mouseout", showIconsOnHover);

        // REMOVES AN ITEM FROM THE LIST
        trashCan.addEventListener("click", () => {
          newTaskLi.remove();
          let element = tasksLocal.indexOf(newTaskText.textContent);
          let completedEl = completedTasksLocal.indexOf(
            newTaskText.textContent
          );
          tasksLocal.splice(element, 1);
          localStorage.setItem("todos", JSON.stringify(tasksLocal));

          completedTasksLocal.splice(completedEl, 1);
          localStorage.setItem(
            "completedTodos",
            JSON.stringify(completedTasksLocal)
          );
        });
      });
    }

    // SHOWS THE ICONS WHEN HOVERING
    function showIconsOnHover() {
      trashCan.classList.toggle("active");
    }

    // show and hide the icons
    newTaskLi.addEventListener("mouseover", showIconsOnHover);
    newTaskLi.addEventListener("mouseout", showIconsOnHover);

    // REMOVES AN ITEM FROM THE LIST
    trashCan.addEventListener("click", () => {
      newTaskLi.remove();
      let element = tasksLocal.indexOf(newTaskText.textContent);
      let completedEl = completedTasksLocal.indexOf(newTaskText.textContent);
      tasksLocal.splice(element, 1);
      localStorage.setItem("todos", JSON.stringify(tasksLocal));

      completedTasksLocal.splice(completedEl, 1);
      localStorage.setItem(
        "completedTodos",
        JSON.stringify(completedTasksLocal)
      );
    });
  });
}
// EventListener that monitors the input text, if enter is pressed, it runs de addNewTask()
newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
});

// Container with the title and the arrow
let completedTasksBtn = document.querySelector(".completed-tasks__btn");

completedTasksBtn.addEventListener("click", () => {
  completedTasks.classList.toggle("hidden");

  let arrow = document.querySelector(".arrow");
  if (completedTasks.classList.contains("hidden")) {
    arrow.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
  } else {
    arrow.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
  }
});

// Dark mode

let darkModeBtn = document.querySelector("#toggle-dark-mode");
let saveCurrentMode = localStorage.getItem("darkMode");

if (saveCurrentMode !== null) {
  toggleDarkMode();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.innerHTML = `<i class="fa-solid fa-toggle-on fa-lg"></i>`;
    localStorage.setItem("darkMode", "enabled");
  } else {
    darkModeBtn.innerHTML = `<i class="fa-solid fa-toggle-off fa-lg"></i>`;
    localStorage.removeItem("darkMode");
  }
}

darkModeBtn.addEventListener("click", toggleDarkMode);
