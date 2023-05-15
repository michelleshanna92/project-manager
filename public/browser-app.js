const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')


var homeTaskText = document.querySelector('#home-task-text')
var newHomeTask = document.getElementById('home-task-text')
var homeTaskList = [];
var workTaskList = [];


// let ul = document.getElementById('home-task-list');
// let li = document.createElement('li');




// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name } = task
        return `<div class="single-task ${completed && 'task-completed'}">
<h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
<div class="task-links">



<!-- edit link -->
<a href="task.html?id=${taskID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${taskID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`
      })
      .join('')
    tasksDOM.innerHTML = allTasks
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showTasks()

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      showTasks()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = taskInputDOM.value

  try {
    await axios.post('/api/v1/tasks', { name })
    showTasks()
    taskInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, task added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})


const node = document.createElement("li");
const textnode = document.createTextNode("fard");
node.appendChild(textnode);
document.getElementById("home-task-list").appendChild(node);


function saveHomeTask() {
  if (document.getElementById('home-tasks').value == 'customTask') {
    var newHomeTask = document.getElementById('home-task-text').value;
    homeTaskList.push(newHomeTask);
    localStorage.setItem('homeTaskList', JSON.stringify(homeTaskList));
    console.log(homeTaskList);
  } else {
    var newHomeTask = document.getElementById('home-tasks').value;
    homeTaskList.push(newHomeTask);
    // localStorage.setItem('homeTaskList', JSON.stringify(homeTaskList));
    localStorage.setItem('homeTaskList', homeTaskList);
    console.log(homeTaskList);
  }
}

function saveWorkTask() {
  if (document.getElementById('work-tasks').value == 'customTask') {
    var newWorkTask = document.getElementById('work-task-text').value;
    workTaskList.push(newWorkTask);
    localStorage.setItem('taskList', JSON.stringify(workTaskList));
    console.log(workTaskList);
  } else {
    var newWorkTask = document.getElementById('work-tasks').value;
    workTaskList.push(newWorkTask);
    localStorage.setItem('workTaskList', JSON.stringify(workTaskList));
    console.log(workTaskList);
  }
}

function checkHomeVal() {
  if (document.getElementById('home-tasks').value == 'customTask') {
    document.getElementById('home-task-text').style.display = 'block';
    
  } else { 
    homeTaskText.style.display = 'none';
  }
}

function checkWorkVal() {
  if (document.getElementById('work-tasks').value == 'customTask') {
    document.getElementById('work-task-text').style.display = 'block';
    
  } else { 
    document.getElementById('work-task-text').style.display = 'none';
  }
}



function init() {
  var storedHomeTasks = JSON.parse(localStorage.getItem('homeTaskList'));
  
  // var storedHomeTasks1 = localStorage.getItem('homeTaskList');
  
  var storedWorkTasks = JSON.parse(localStorage.getItem('workTaskList'));
  var currentHomeTasks = document.getElementById('current-home-tasks');
  var homeTasksString = JSON.stringify(storedHomeTasks);
  // JSON.stringify(storedWorkTasks);
  console.log('Home Tasks: ' + storedHomeTasks);
  console.log('Work Tasks: ' + storedWorkTasks);
  // currentHomeTasks.textContent = storedHomeTasks.split(',');

  for (let i = 0; i < storedHomeTasks.length; i++){
    let ul = document.getElementById('home-task-list');
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = storedHomeTasks[i];
  // currentHomeTasks.textContent = storedHomeTasks;
  console.log(typeof storedHomeTasks);
  console.log(typeof homeTasksString);

  }
  
}


function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}



// function arrayToList(taskList) {
//   let list = null;
//   for (let i = taskList.length - 1; i >= 0; i--) {
//       list = { value: taskList[i], rest: list };
//   }
//   return list;
// }

