const todoList = [
  { name: 'Laptop Stand' },
  { name: 'Wireless Mouse' },
  { name: 'Ergonomic Keyboard' },
   { name: 'USB-C Hub' },
   { name: 'Noise-Cancelling Headphones' },
    { name: 'Extenal SSD 1TB' },
 { name: 'LED Desk Lamp Wireless Charging' }
  
];

let editIndex = null; 

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const { name } = todoList[i];

    todoListHtml += `
      <div>${name}</div>
      <img src="2202989.webp" 
           style="width:20px;cursor:pointer"
           onclick="editTodo(${i})">
      <img src="3405244.png  " 
           style="width:20px;cursor:pointer"
           onclick="deleteTodo(${i})">
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  if (name === '') return;

  if (editIndex === null) {
    
    todoList.push({ name });
  } else {
    
    todoList[editIndex].name = name;
    editIndex = null;
    document.querySelector('button').innerText = 'Add Product';
  }

  inputElement.value = '';
  renderTodoList();
}

function editTodo(index) {
  const inputElement = document.querySelector('.js-name-input');

  inputElement.value = todoList[index].name;
  editIndex = index;

  document.querySelector('button').innerText = 'Update';
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}