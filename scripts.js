"use strict;"

var todoList = {
  todos: [],

  // Add a todo to the list
  addTodo: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
    view.displayTodos();
  },

  // Change the content of a todo
  changeTodo: function(index, text) {
    this.todos[index].todoText = text;
    view.displayTodos();
  },

  // Remove a todo from the list
  removeTodo: function(index) {
    this.todos.splice(index, 1);
    view.displayTodos();
  },

  // Toggle the completion status of a single todo
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    view.displayTodos();
  },

  // Toggle completion status of all todos
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get total number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // If all todos are completed, toggle their statuses
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // otherwise, make all of their statuses completed
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    view.displayTodos();
  }
};

// Object with functions that handle the view
var view = {
  // populate todo list by adding li's to the DOM
  displayTodos: function() {
    var todosUl = document.getElementById('todosUl');
    todosUl.innerHTML = '';

    for (var i = 0; i < todoList.todos.length; i++) {
      var todo = todoList.todos[i];
      var todoLi = document.createElement('li');

      if (todo.completed === true) {
        todoLi.textContent = '(x) ' + todo.todoText;
      } else {
        todoLi.textContent = '( ) ' + todo.todoText;
      }

      todosUl.appendChild(todoLi);
    }
  }
};

// Assign variables to buttons
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');
var addTodoButton = document.getElementById('addTodoButton');
var changeTodoButton = document.getElementById('changeTodoButton');
var removeTodoButton = document.getElementById('removeTodoButton');
var toggleCompletedButton = document.getElementById('toggleCompletedButton');

// Button event listeners that utilize input values
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});

addTodoButton.addEventListener('click', function() {
  var addTodoTextInput = document.getElementById('addTodoInput');
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = null;
});

changeTodoButton.addEventListener('click', function() {
  var changeTodoPosition = document.getElementById('changeTodoPositionInput');
  var changeTodoText = document.getElementById('changeTodoTextInput');
  todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
  changeTodoPosition.value = null;
  changeTodoText.value = null;
});

removeTodoButton.addEventListener('click', function() {
  var removeTodoPosition = document.getElementById('removeTodoPositionInput');
  todoList.removeTodo(removeTodoPosition.valueAsNumber);
  removeTodoPosition.value = null;
});

toggleCompletedButton.addEventListener('click', function() {
  var toggleCompletedPosition = document.getElementById('toggleCompletedPositionInput');
  todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
  toggleCompletedPosition.value = null;
});