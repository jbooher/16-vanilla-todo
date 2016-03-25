import ToDo from "./ToDo";

class ToDoList {

  constructor() {
    this.toDos = [];
    this.load();
  }

  createToDo(value, completed = false) {
    const toDo = new ToDo(value, completed, this);
    this.toDos.push(toDo);
    this.save();
    toDo.render();
  }

  save() {
    let todoData = this.toDos.map((todo) => {
      return { item: todo.item, completed: todo.completed };
    });

    localStorage.setItem('todos', JSON.stringify(todoData));
  }

  load() {
    let stringified = localStorage.getItem('todos');
    // don't do this if its blank
    if (stringified === null) {
      return;
    }

    JSON.parse(stringified).forEach((todo) => {
      this.createToDo(todo.item, todo.completed, this);
    })
  }
}

export default ToDoList;
