var todos = ['item1', 'item2', 'item3'];

function showTodos() {
  console.log(todos);
}

function addTodo(todo) {
  todos.push(todo);
  showTodos();
}

function changeTodo(index, newValue) {
  todos[index] = newValue;
  showTodos();
}

function removeTodo(index) {
  todos.splice(index, 1)
  showTodos();
}

showTodos();
addTodo('some stuff');
addTodo('cool beans brah');
changeTodo(0, 'just a new item');
changeTodo(1, 'testing this out rofflecopter');
removeTodo(0);