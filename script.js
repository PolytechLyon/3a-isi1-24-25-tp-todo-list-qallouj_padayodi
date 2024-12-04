const todoList = document.getElementById('todo-list');
const newItemInput = document.getElementById('new-todo-item-title');
const addButton = document.getElementById('new-todo-item-add');

const editItemDiv = document.getElementById('edit-item');
const editItemInput = document.getElementById('edit-todo-item-title');
const confirmEditButton = document.getElementById('edit-todo-item-confirm');
const cancelEditButton = document.getElementById('edit-todo-item-cancel');


function addTodoItem() {
    const title = newItemInput.value.trim();

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${title}</span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;

    li.querySelector('.edit-button').addEventListener('click', () => editTodoItem(li, title));
    li.querySelector('.delete-button').addEventListener('click', () => deleteTodoItem(li));

    todoList.appendChild(li);
    newItemInput.value = ''; 
}


function deleteTodoItem(item) {
    todoList.removeChild(item);
}


function editTodoItem(item, title) {
    currentEditIndex = item;
    editItemInput.value = title;
    editItemDiv.hidden = false; 
    document.getElementById('new-item').hidden = true; 
}

function confirmEdit() {
    const newTitle = editItemInput.value.trim();
    currentEditIndex.querySelector('span').textContent = newTitle;
    cancelEdit(); 
}

function cancelEdit() {
    editItemDiv.hidden = true; 
    document.getElementById('new-item').hidden = false; 
    editItemInput.value = ''; 
    currentEditIndex = null; 
}


addButton.addEventListener('click', addTodoItem);
confirmEditButton.addEventListener('click', confirmEdit);
cancelEditButton.addEventListener('click', cancelEdit);
