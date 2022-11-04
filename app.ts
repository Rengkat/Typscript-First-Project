// import Todo from "./class.js";
// dom elements
const form = document.querySelector("form") as HTMLFormElement;
const todoInput = document.querySelector("#todo-input") as HTMLInputElement;
const todoDate = document.querySelector("#todo-date") as HTMLInputElement;
const todoContainer = document.querySelector(".todo") as HTMLDivElement;
// console.log(form, todoInput, todoDate, todoContainer);
class Todo {
  constructor(public todo: string, public date: string) {}
}
// error message
class ErrorMessage {
  constructor(public message: string) {}
}
let todos: Todo[] = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let myTodo: { todo: string; date: string };
  let errorMessage;
  if (todoInput.value !== "" && todoDate.value !== "") {
    myTodo = new Todo(todoInput.value, todoDate.value);
    todos.push(myTodo);
    // const nums = ["1", "3", "4", "5", "6"];
    todos.forEach((todo) => {
      const t = document.createElement("p");
      //   t.innerText = todo.todo;
      //   todoContainer.append(t);
      //   console.log(todo.todo);
      todoContainer.innerHTML = `<aside class="flex">
            <p>${todo.todo}</p>
            <div>Icon</div>
          </aside>
          <p class="date">${todo.date}</p>`;
    });
  } else {
    errorMessage = new ErrorMessage("Please fill all field");
    const p = document.createElement("p");
    p.innerText = errorMessage.message;
    todoContainer.append(p);
    p.style.color = "red";
  }
  todoInput.value = "";
  todoDate.value = "";
});
