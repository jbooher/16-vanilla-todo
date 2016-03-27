class ToDo {
  constructor(item, completed = false, todoList) {
    this.item = item;
    this.completed = completed;
    this.todoList = todoList;
  }

  render() {
    const ul = document.querySelector("#toDos");
    const ulCompleted = document.querySelector("#completedList");
    const li = document.createElement("li");

    const label = document.createElement("label");
    label.innerHTML = this.item;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = "Complete";
    label.appendChild(input);

    li.appendChild(label);

    if (this.completed === true) {
      ulCompleted.appendChild(li);
      input.type = "submit";
      input.value = "Archive";
      input.addEventListener("click", (e) => {
        ulCompleted.removeChild(li);
        this.todoList.removeToDo(this);
        this.todoList.save();
      });
    }
    else {
      li.addEventListener("change", (e) => {
        this.completed = true;
        this.todoList.save();
        ulCompleted.appendChild(li);
        input.type = "submit";
        input.value = "Archive";
        input.addEventListener("click", (e) => {
          ulCompleted.removeChild(li);
          this.todoList.removeToDo(this);
          this.todoList.save();
        });
      });

      ul.appendChild(li);
    }
  }
}

export default ToDo;
