console.log("Welcome to Review!")

const myTodos = [
  { task: "Water the plants", done: false },
  { task: "Take out the trash", done: true },
  { task: "Call grandma", done: false },
  { task: "Finish homework", done: true }
];

const list = document.getElementById("todo-list");
// Scenerio One:
// Rendor the myTodos on the page.

myTodos.forEach((todo) =>{
  const li = document.createElement("li");
  li.textContent = todo.task;
  list.append(li)
})


// Scenerio Two:
// I want to see only what is done. 
// Show me the index number also. 
// For example: "2. Take out the trash"

myTodos.forEach((todo, index) => {
    if (todo.done === true) {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${todo.task}`;
      list.append(li);
    }
});