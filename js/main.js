'use strict'

let todoAddInput = document.querySelector('.todo_add>input'),
todoAddButton = document.querySelector('.todo_add>button'),
todoList = document.querySelector('.todo_list'),
todoItem = document.querySelectorAll('.todo_list>li'),
todoItemCheckbox = document.querySelectorAll('.todo_list>li>input')

document.addEventListener('keydown', () => {
  todoAddInput.focus()
})
document.addEventListener('keydown', (e) => {
  todoAddInput.focus()
  if (e.key == "Enter") {
    if (todoAddInput.value.length>2) {
      todoList.innerHTML += `<li>${todoAddInput.value}</li>`
      todoAddInput.value = ''
    }
  }
})

todoAddButton.addEventListener('click', () => {
  if (todoAddInput.value.length>2) {
    todoList.innerHTML += `<li>${todoAddInput.value}</li>`
    todoAddInput.value = ''
  }
})

todoItem.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
    e.classList.toggle('active')
  })
});