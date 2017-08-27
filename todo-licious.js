var todos = ['item1', 'item2', 'item3'];

var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
        console.log("Your Todo list is empty!")
      }
    else {
      console.log("Todo List:");
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(index, text) {
    // this.todos[index] = text;
    this.todos[index].todoText = text;
    this.displayTodos();
  },

  removeTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  }
};