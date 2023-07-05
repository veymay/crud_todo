let todoAddInput = document.querySelector('.todo_add>input'),
  todoAddButton = document.querySelector('.todo_add>button'),
  todoList = document.querySelector('.todo_list'),
  todoItem = document.querySelectorAll('.todo_list>li'),
  todoItemCheckbox = document.querySelectorAll('.todo_list>li>input')

document.addEventListener('keydown', () => {
  todoAddInput.focus()
})

todoAddButton.addEventListener('click', () => {
  if (todoAddInput.value.length>2) {
    todoList.innerHTML += `<li>${todoAddInput.value}</li>`
    todoAddInput.value = ''
  }
})

todoItem.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active')
    e.stopPropagation()
  })
});