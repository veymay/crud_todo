let todoInp = document.querySelector('.todo_input')
let todoList = document.querySelector('ul.todo_list')
let numberAll = document.querySelector('.number>.all')
let todoListItems = document.querySelectorAll('ul.todo_list>.item')
let todos = JSON.parse(localStorage.getItem('todosLIST')) ? JSON.parse(localStorage.getItem('todosLIST')) : []
setInterval(() => {
}, 1000);
function setTODO() {
  localStorage.setItem('todosLIST', JSON.stringify(todos))
}

//* Add TODO
document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
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
})
//* Show TODO
function showTODO() {
  todoList.innerHTML = ''
  numberAll.innerHTML = `<i class="fi fi-br-dot-circle"></i>${todos.length}`
  todos.forEach((todo, id) => {
    todoList.innerHTML += `
    <li class='item ${todo.completed}'>
    <div class="content">
    <input type="text" value="${todo.text}" readonly>
    </div>
    <div class="buttons">
    <span class="edit" onclick="editTODO(${id})">
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
showTODO()
//? Completed TODO
todoListItems.forEach((item, id) => {
  item.addEventListener('click', () => {
    console.log('salom');
    todos[id].completed == '' ? todos[id].completed = 'completed' : todos[id].completed = ''
    setTODO()
  })
})
todoListItems.forEach((item, id) => {
  item.addEventListener('click', () => {
    showTODO()
  })
})

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