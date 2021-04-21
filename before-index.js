function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  if (cityName === 'Tokyo') {
    document.getElementById('search__container').style.display = "none";
  } else {
    document.getElementById('search__container').style.display = "grid";
  }
}

function addTask() {
  let data = document.getElementById('input__data').value
  
  if (data !== '') {
    let task = []
    task.push({
      name: data,
      checked: false
    })
    console.log(task)
    loadData(task)
    drawTask(task)
  } else {
    console.log(task)
  }
}

function loadData (task) {
  let tasksMemory = localStorage.getItem('tasks');
  let cont = 0
  let tasks = []
  console.log('taks-trac')
  console.log(task)
  if (tasksMemory != null && tasksMemory != "" && tasksMemory != false && tasksMemory != undefined){
    tasksMemory = JSON.parse(tasksMemory)
    console.log('-jhon')
    tasksMemory.forEach((prop) => {

      tasks.push(prop);
    })

    cont++;
    if (task) tasks.push(task[0])
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else if (task) {
      tasks[0] = task[0]
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  if (!task) {
    console.log('draw')
    console.log(tasks)
    drawTask(tasks)
  }
}

function drawTask(tasks) {

  console.log('drawTask')
  console.log(tasks)
  console.log(tasks.length)
  let taskContainer = document.getElementById('active__task-container')
  let count = 1;
  if (tasks.length > 0) {
    tasks.forEach((prop) => {
      console.log(prop.name)
      console.log(prop.checked)
      let block = `<input type="checkbox" name="todo" ${prop.checked ? 'checked' : ''} id="${++count}">${prop.name}`
      const taskNew = document.createElement('span')
      taskNew.innerHTML = block
      taskContainer.appendChild(taskNew)
    })
  }
}

// Get the element with id="defaultOpen" and click on it
window.addEventListener('load', loadData())
document.getElementById("defaultOpen").click();
