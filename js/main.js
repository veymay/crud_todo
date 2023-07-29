let input = document.querySelector('.todo_input'),
  list = document.querySelector('.todo_list'),
  listItem = document.querySelectorAll('.todo_list>li'),
  todos = JSON.parse(localStorage.getItem('todos'))?JSON.parse(localStorage.getItem('todos')):[] 
// document.addEventListener('click', () => {
//   input.focus()
// })

getTodo(todos)
// Set TODO
function setTodo(inp,arr) {
  if (inp.value.length > 3) {
    inp.value.trim()
    arr.push(inp.value)
    inp.value = ''
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(arr);
  }
}
// Get TODO
function getTodo(todoArr) {
  todoArr.forEach(todoItem => {
    list.innerHTML += `<li class='items'>${todoItem}<div class="buttons"><span class="edit"><i class="fi fi-br-pencil"></i></span> <span class="remove"><i class="fi fi-br-cross"></i></span> </div></li>`
  });
}

// Complete TODO
listItem.forEach(element => {
  element.addEventListener('click', () => {
    alert('s')
  })
});
// Remove TODO
function removeTodo(todoArr) {
  todoArr.forEach(todoItem => {
    todoItem.remove
  });
}
// /////////////////////////////////////////////
document.addEventListener('keydown', (e) => {
  input.focus()
  if (e.key == 'Enter') {
    setTodo(input, todos)
    list.innerHTML = ''
    getTodo(todos)
  } 
})


// list.innerHTML+=`<li class='item'>${input.value}</li>`