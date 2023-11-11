/* exported todos */
let todos = [];

// javascript-local-storage is the unique name for localStorage object

//  conditional checks if the localStorage value is null/has no value
const previousTodoJSON = window.localStorage.getItem(
  'javascript-local-storage'
);

if (previousTodoJSON !== null) {
  todos = JSON.parse(previousTodoJSON);
}

window.addEventListener('beforeunload', (e) => {
  // todos object into a string
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
