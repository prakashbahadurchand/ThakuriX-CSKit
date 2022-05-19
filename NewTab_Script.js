// Typing Quotes
var indexItem = 0;
var typeSpeed = 70;
var randomQuotes;

const taskInput = document.querySelector(".task-input input"),
  filters = document.querySelectorAll(".filters span"),
  clearAll = document.querySelector(".clear-btn"),
  taskBox = document.querySelector(".task-box");
  let imageMindDivert = document.getElementById("image-mind-divert");

let editId,
  isEditTask = false,
  todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("span.active").classList.remove("active");
    btn.classList.add("active");
    showTodo(btn.id);
  });
});

// Setup Listener after DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {

  chrome.storage.local.get(["its_focus_time"], function (result) {
    let isFocusTime = result.its_focus_time;
    isFocusTime = true;
    if (isFocusTime) {

        //imageMindDivert.style.display = "block";
      //play focus audio 1min
      var audio = new Audio("assets/focus_music.mp3");
      audio.play();
      setTimeout(function () {
        audio.pause();
      chrome.storage.local.set({ its_focus_time: true });
      imageMindDivert.remove();
      }, 60000);
      // Turn of Focus Mode
      //chrome.storage.local.set({ its_focus_time: false });
    }
  });

// Setup Four Items Listener
document.getElementById("first-concentration").addEventListener("click", function() {
  window.open('https://www.youtube.com/watch?v=WYfYmYbp7C4');
});
document.getElementById("second-incomes").addEventListener("click", function() {
  window.open('https://www.youtube.com/watch?v=9YsP0mFWUCs');
});
document.getElementById("third-house").addEventListener("click", function() {
  window.open('https://www.youtube.com/watch?v=ABy95341Dto');
});
document.getElementById("fourth-family").addEventListener("click", function() {
  window.open('https://www.youtube.com/watch?v=WPni755-Krg');
});

// Setup Special Quotes View
const quoteList = [
  "Nobody will help you without their profit.",
  "What about your eyes, put everything into priority, and solve first what is important for you.",
  "Nobody will catch you if you fall down, but when you success, everyones will hang up with you, thats truth.",
  "Strong Mindset, Self-Disciplined Habits, Long-Term Focus, Builds You Better Than You Think.",
  "Who cares what you think, who cares what you believe, who cares whats going on your life, the only friend who knows you is just you.",
  "Life doesn't mean one hundred years to live, it means one time opportunity for change something in your favor until thousands of years.",
  "Once you escape the rat race, then your dream will start, be practical.", 
  "First step is always hard, once you step up then destination will be clear.",
  "If you want see: just like, if you want engaged: love it, but if you want achieve: then make need for it."];
  
  randomQuotes = quoteList[Math.floor(Math.random() * quoteList.length)];
  typeQuotesWriterEN();

});

function typeQuotesWriterEN() {
  if (indexItem < randomQuotes.length) {
    document.getElementById("spanQuotesText").innerHTML += randomQuotes.charAt(indexItem);
    indexItem++;
    setTimeout(typeQuotesWriterEN, typeSpeed);
  }
}

function showTodo(filter) {
  let liTag = "";
  if (todos) {
    todos.forEach((todo, id) => {
      let completed = todo.status == "completed" ? "checked" : "";
      if (filter == todo.status || filter == "all") {
        liTag += `<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="task-menu">
                                    <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </li>`;
      }
    });
  }
  taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
  let checkTask = taskBox.querySelectorAll(".task");
  !checkTask.length
    ? clearAll.classList.remove("active")
    : clearAll.classList.add("active");
  taskBox.offsetHeight >= 300
    ? taskBox.classList.add("overflow")
    : taskBox.classList.remove("overflow");
}
showTodo("all");

function showMenu(selectedTask) {
  let menuDiv = selectedTask.parentElement.lastElementChild;
  menuDiv.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != selectedTask) {
      menuDiv.classList.remove("show");
    }
  });
}

function updateStatus(selectedTask) {
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add("checked");
    todos[selectedTask.id].status = "completed";
  } else {
    taskName.classList.remove("checked");
    todos[selectedTask.id].status = "pending";
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

function editTask(taskId, textName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = textName;
  taskInput.focus();
  taskInput.classList.add("active");
}

function deleteTask(deleteId, filter) {
  isEditTask = false;
  todos.splice(deleteId, 1);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showTodo(filter);
}

clearAll.addEventListener("click", () => {
  isEditTask = false;
  todos.splice(0, todos.length);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showTodo();
});

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key == "Enter" && userTask) {
    if (!isEditTask) {
      todos = !todos ? [] : todos;
      let taskInfo = { name: userTask, status: "pending" };
      todos.push(taskInfo);
    } else {
      isEditTask = false;
      todos[editId].name = userTask;
    }
    taskInput.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(document.querySelector("span.active").id);
  }
});
