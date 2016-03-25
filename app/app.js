import ToDo from "./modules/ToDo";
import ToDoList from "./modules/ToDoList";

const toDoSubmit = document.querySelector("#toDoSubmit");
const toDoInput = document.querySelector("#toDoInput");
const toDoForm = document.querySelector("#toDoForm");

const toDoList = new ToDoList();

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoList.createToDo(toDoInput.value);
  toDoInput.value = "";
  toDoInput.focus();
  console.log(toDoList.toDos);

});
