console.log("Welcome to Level 1!")

const todos = ["Buy groceries", "Walk the dog", "Do laundry", "Study JavaScript"];

// DOM 
const list = document.getElementById("todo-list");

// todos.forEach(function(task) {
//     const li = document.createElement("li");
//     li.textContent = task;
//     list.appendChild(li)
//     }
// )

// Arrow Function
// ----- <>
todos.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li)
})
// ----- <>

// Basic Syntax
// ---- <>

// array.forEach((item, index) => {
//     // DO some code, do something
// })

// ---- <>

// Use this example for to guide understanding. 
// ----- <>
fruits = ["apple", "banana", "cherry"]
fruits.forEach((fruit) => {
    console.log("I like", fruit)
})
// ----- <>