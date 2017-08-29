var todoList = {
  todos: [],

  // Display todos and their completion statuses
  displayTodos: function() {
    if (this.todos.length === 0) {
        console.log("Your Todo list is empty!")
      }
    else {
      console.log("Todo List:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  // Add a todo to the list
  addTodo: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
    this.displayTodos();
  },

  // Change the content of a todo
  changeTodo: function(index, text) {
    this.todos[index].todoText = text;
    this.displayTodos();
  },

  // Remove a todo from the list
  removeTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  // Toggle the completion status of a single todo
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
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

    this.displayTodos();
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
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

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