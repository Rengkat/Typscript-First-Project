"use strict";
// import Todo from "./class.js";
// dom elements
const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoDate = document.querySelector("#todo-date");
const todoContainer = document.querySelector(".todo");
// console.log(form, todoInput, todoDate, todoContainer);
class Todo {
    constructor(todo, date) {
        this.todo = todo;
        this.date = date;
    }
}
// error message
class ErrorMessage {
    constructor(message) {
        this.message = message;
    }
}
let todos = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let myTodo;
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
    }
    else {
        errorMessage = new ErrorMessage("Please fill all field");
        const p = document.createElement("p");
        p.innerText = errorMessage.message;
        todoContainer.append(p);
        p.style.color = "red";
    }
    todoInput.value = "";
    todoDate.value = "";
});
