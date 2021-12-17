const todosForm = document.getElementById('todos-form');
const taskInput = document.getElementById('task-input');
const tasksList = document.getElementById('tasks-list');

const sharedWorker = new SharedWorker('worker.js');

sharedWorker.port.onmessage = function ({ data: messages }) {
  tasksList.innerHTML = messages
    .map((message) => `<li class="task-item">${message}</li>`)
    .join('');
};

todosForm.onsubmit = (evt) => {
  evt.preventDefault();

  sharedWorker.port.postMessage(taskInput.value);
  todosForm.reset();
};
