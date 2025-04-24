console.log("Welcome to Level Two!")

// DOM
const list = document.getElementById("todo-list"); 

const todoList = [
  { task: "Buy groceries", done: false },
  { task: "Walk the dog", done: true },
  { task: "Do laundry", done: false },
  { task: "Study JavaScript", done: true }
];


todoList.forEach((todo, index) => {
  if(todo.done === true){
    const li = document.createElement("li")
    li.textContent = todo.task
    list.appendChild(li)
  }
})

// The bug from the video, was the DOM was inccorect. 
// See if you can catch it! 
