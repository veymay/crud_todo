let todoInp = document.querySelector('.todo_input')
let todoList = document.querySelector('ul.todo_list')


let todos = JSON.parse(localStorage.getItem('todosLIST'))?JSON.parse(localStorage.getItem('todosLIST')):[]

function delTODO(index,id) {
  if (index >= 0) {
    todos.splice(index, 1);
  }
}
function setTODO() {
  todos.push(todoInp.value)
  todoInp.value = ''
  localStorage.setItem('todosLIST', JSON.stringify(todos))
}
function getTODO() {
  todoList.innerHTML = ''
  todos.forEach((todo,id) => {
    todoList.innerHTML += `
      <li class='item'>
        <div class="content">${todo}</div>
        <div class="buttons">
          <span class="remove" onclick="${delTODO(id)}">
            <i class="fi fi-br-cross"></i>
          </span>
        </div>
      </li>`
  });
}

document.addEventListener('keydown', (e) => {
  todoInp.focus()
  if (e.key == 'Enter') {
    setTODO()
    getTODO()
  }
})

getTODO()