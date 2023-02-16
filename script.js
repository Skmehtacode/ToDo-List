// javascript code goes here

document.querySelector(".todo-button").addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();
  const inputEle = document.querySelector(".todo-input");
  const value = inputEle.value;
  if (value === " ") return;
  const listconatiner = document.createElement("div");
  const listItem = document.createElement("li");
  listItem.innerText = value;
  listItem.classList.add("todo-item");
  listconatiner.appendChild(listItem);
  inputEle.value = " ";

  const completebtn = document.createElement("button");
  completebtn.innerText = "completed";
  completebtn.classList.add("complete-btn");
  completebtn.addEventListener("click", markcompleted);
  listconatiner.appendChild(completebtn);

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.classList.add("trash-btn");
  deletebtn.addEventListener("click", deleteItem);
  listconatiner.appendChild(deletebtn);
  document.querySelector(".todo-list").appendChild(listconatiner);
}

function markcompleted(e) {
  e.target.parentElement.firstChild.classList.toggle("completed");
}

function deleteItem(e) {
  e.target.parentElement.remove();
}