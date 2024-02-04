let todoInp = document.querySelector('.todo_input')
let todoBtn = document.querySelector('.todo_btn')
let todoList = document.querySelector('ul.todo_list')
let date = document.querySelector('.date')
let time = document.querySelector('.time')
let numberAll = document.querySelector('.number>.all')
let todoListItems = document.querySelectorAll('ul.todo_list>.item')
let todos = JSON.parse(localStorage.getItem('todosLIST')) ? JSON.parse(localStorage.getItem('todosLIST')) : []

function setTODO() {
  localStorage.setItem('todosLIST', JSON.stringify(todos))
}
//* Date
function myDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '.' + dd + '.' + yyyy;
  date.innerHTML = today
}
//? Time
function myTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  time.textContent =
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(myTime, 1000, myDate());

//* Add TODO
function addTODO() {
  if (todoInp.value != '') {
    todos.push({
      text: todoInp.value,
      completed: ''
    })
    setTODO()
    todoInp.value = ''
    showTODO()
  }
}
addTODO()
document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    addTODO()
  }
})
todoBtn.addEventListener('click', () => {
  addTODO()
})
//* Show TODO
function showTODO() {
  todoList.innerHTML = ''
  numberAll.innerHTML = `<i class="fi fi-br-dot-circle"></i>${todos.length}`
  todos.forEach((todo, id) => {
    todoList.innerHTML += `
    <li class='item ${todo.completed}' onclick='event.stopPropagation();completedTODO(${id})'>
    <span class="icon"></span>
    <div class="content">
    <input type="text" value="${todo.text}" readonly>
    </div>
    <div class="buttons">
    <span class="edit" onclick="event.stopPropagation();editTODO(${id})">
    <i class="fi fi-br-pencil"></i>
    </span>
    <span class="remove" onclick="delTODO(${id})">
    <i class="fi fi-br-cross"></i>
    </span>
    </div >
    </li > `
    todoListItems = document.querySelectorAll('ul.todo_list>.item')
  });
}

//* Completed TODO
function completedTODO(id) {
  todos[id].completed == '' ? todos[id].completed = 'completed' : todos[id].completed = ''
  setTODO()
  showTODO()
}

showTODO()
//? Edit TODO
function editTODO(id) {
  let buttons = document.querySelectorAll('.buttons')
  let editBtn = document.querySelectorAll('.buttons>span.edit')
  let todoItemInp = document.querySelectorAll('.content>input')
  if (buttons[id].classList.contains('active')) {
    editBtn[id].innerHTML = '<i class="fi fi-br-pencil"></i>'
  } else {
    editBtn[id].innerHTML = '<i class="fi fi-br-check"></i>'
  }
  buttons[id].classList.toggle('active')
  todoItemInp[id].classList.toggle('active')
  todoItemInp[id].toggleAttribute('readonly')
  todos[id].text = todoItemInp[id].value
  setTODO()
}

//! Delete TODO
function delTODO(id) {
  todos.splice(id, 1);
  showTODO()
  setTODO()
}