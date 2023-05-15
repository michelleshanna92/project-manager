alert("Prepare for Ultimate Success!! You Can Do It!! Login now to get started!!")

// Defines an empty array to hold the tasks to be "listed"
let tasks = [];

// Function used to add tasks
function addTask(task) {
  tasks.push(task);
}

// Function used to remove tasks
function removeTask(index) {
  tasks.splice(index, 1);
}

// Function creates list of ALL tasks
function listTasks() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Testing out the functions
addTask("Paint the house");
addTask("Wash the car");
addTask("Water the plants");
addTask("Clean the garage");
addTask("Do the laundry");
addTask("Go groccery shopping");
addTask("Study for test");
addTask("Feed the dog");
listTasks();
removeTask();
removeTask();
removeTask();
addTask("Vacuum Floor");
addTask("Do the dishes");
listTasks();
removeTask();
listTasks();




const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function() {
  // Code to execute when the login button is clicked
});


// Define a users object to store login credentials
const users = {
  john: "password123",
  sarah: "12345678"
};

// Get the login form and add a submit event listener
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the default form submission
  const usernameInput = document.querySelector("#username-input");
  const passwordInput = document.querySelector("#password-input");
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the entered username and password match a user in the users object
  if (users.hasOwnProperty(username) && users[username] === password) {
    alert("Login successful!");
    // redirect the user to the home page
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password. Please try again.");
    // clear the input fields
    usernameInput.value = "";
    passwordInput.value = "";
  }
});

