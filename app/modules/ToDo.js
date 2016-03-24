class ToDo {
  constructor(item) {
    this.item = item;
    this.completed = false;
  }

  render() {
    const ul = document.querySelector("#toDos");
    const ulCompleted = document.querySelector("#completedList");
    const li = document.createElement("li");

    const label = document.createElement("label");
    label.innerHTML = this.item;

    const input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);

    li.appendChild(label);

    li.addEventListener("change", (e) => {
      li.classList.add("completed");
      ulCompleted.appendChild(li);
      label.removeChild(input);
      console.log(li);
    });

    ul.appendChild(li);
  }
}

export default ToDo;
