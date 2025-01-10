// Display clock on the home screen
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    const date = now.toDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateTime, 1000); // Update the clock every second

// Screen Navigation
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// To-Do List Functionality
// Function to add a new task
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() !== "") {
        const taskList = document.getElementById("todo-list");

        // Create a new list item
        const li = document.createElement("li");
        li.classList.add("task-item");

        // Create a checkbox for the task
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.addEventListener("change", toggleTaskCompletion);

        // Create a span to hold the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-task");
        deleteButton.onclick = () => {
            li.remove();
        };

        // Append checkbox, text, and delete button to the list item
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        document.getElementById("new-task").value = "";
    }
}

// Function to toggle the strike-through when the checkbox is checked/unchecked
function toggleTaskCompletion(event) {
    const taskText = event.target.nextSibling; // Get the task text span
    if (event.target.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray"; // Optional: change color to indicate completion
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "white"; // Reset the color
    }
}


// Pomodoro Timer Functionality
let pomodoroInterval;
let timeLeft = 25 * 60;

function startTimer() {
    pomodoroInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer-display').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(pomodoroInterval);
            alert("Pomodoro complete!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(pomodoroInterval);
    timeLeft = 25 * 60; // Reset timer
    document.getElementById('timer-display').textContent = "25:00";
}
