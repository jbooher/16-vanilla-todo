import ToDo from "./modules/ToDo";

const toDoSubmit = document.querySelector("#toDoSubmit");
const toDoInput = document.querySelector("#toDoInput");
const toDoForm = document.querySelector("#toDoForm");

toDoForm.addEventListener("submit", (e) => {
  const toDo = new ToDo(toDoInput.value);
  e.preventDefault();
  toDo.render();
  toDoInput.value = "";
  toDoInput.focus();
});
