"use strict"

// Todo list array and related functions
var todoList = {
  todos: [],

  // Add a todo to the list
  addTodo: function() {
    var textInput = document.getElementById('addTodoInput');
    this.todos.push({
      todoText: textInput.value,
      completed: false
    });
    textInput.value = null;
    view.displayTodos();
  },

  // Change the content of a todo
  changeTodo: function() {
    var positionInput = document.getElementById('changeTodoPositionInput');
    var textInput = document.getElementById('changeTodoTextInput');
    this.todos[positionInput.value].todoText = textInput.value;
    positionInput.value = null;
    textInput.value = null;
    view.displayTodos();
  },

  // Remove a todo from the list
  removeTodo: function() {
    var positionInput = document.getElementById('removeTodoPositionInput');
    this.todos.splice(positionInput.value, 1);
    positionInput.value = null;
    view.displayTodos();
  },

  // Toggle the completion status of a single todo
  toggleCompleted: function() {
    var positionInput = document.getElementById('toggleCompletedPositionInput');
    var todo = this.todos[positionInput.value];
    todo.completed = !todo.completed;
    positionInput.value = null;
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
    // otherwise, mark all of their statuses complete
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    view.displayTodos();
  }
};

// Object with functions that handle the DOM view
var view = {
  // populate todo list by adding li's to a ul
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

// Assign buttons to variables
var toggleAllButton = document.getElementById('toggleAllButton');
var addTodoButton = document.getElementById('addTodoButton');
var changeTodoButton = document.getElementById('changeTodoButton');
var removeTodoButton = document.getElementById('removeTodoButton');
var toggleCompletedButton = document.getElementById('toggleCompletedButton');

// Set button event listeners
addTodoButton.addEventListener('click', todoList.addTodo.bind(todoList));
changeTodoButton.addEventListener('click', todoList.changeTodo.bind(todoList));
removeTodoButton.addEventListener('click', todoList.removeTodo.bind(todoList));
toggleCompletedButton.addEventListener('click', todoList.toggleCompleted.bind(todoList));
toggleAllButton.addEventListener('click', todoList.toggleAll.bind(todoList));