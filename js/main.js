let input = document.querySelector('.todo_input'),
  list = document.querySelector('.todo_list'),
  remove = document.querySelectorAll('.remove'),
  todos = JSON.parse(localStorage.getItem('todos'))?JSON.parse(localStorage.getItem('todos')):[] 

window.addEventListener('click', (e) => {
  e.stopPropagation()
})
///////////////////////////////////////////////
document.addEventListener('keydown', (e) => {
  input.focus()
  if (e.key == 'Enter') {
    setTodo(input, todos)
    list.innerHTML = ''
    getTodo(todos)
  } 
})

// Set TODO
function setTodo(inp,arr) {
  if (inp.value.length > 0) {
    inp.value.trim()
    arr.push({text: inp.value, completed: false})
    inp.value = ''
    localStorage.setItem('todos',JSON.stringify(todos))
  }
}
// Get TODO
function getTodo(todoArr) {
  todoArr.forEach((todos,index) => {
    list.innerHTML += `<li class='item ${todos.completed?'completed':''}' onclick="completedTODO(${index})"><div class="content">${todos.text}</div><div class="buttons"><span class="edit"> <span class="remove" onclick="event.stopPropagation();deleteTODO(${index})"><i class="fi fi-br-cross"></i></span> </div></li>`
  });
}
// Completed Todo
function completedTODO(index) {
  listItem = document.querySelectorAll('li.item');
  listItem[index].classList.toggle('completed');
  let get = JSON.parse(localStorage.getItem("todos"));
  if (listItem[index].classList.contains("completed")) {
    get[index]["completed"] = true;
  } else get[index]["completed"] = false;
  localStorage.setItem("todos", JSON.stringify(get));
};
// Delete TODO
function deleteTODO(index) {
  listItem = document.querySelectorAll('li.item');
  listItem[index].remove()
};
getTodo(todos)