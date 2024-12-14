const todoForm=document.querySelector('form');
const todoinput=document.getElementById('todo_input');
const todolist=document.getElementById('todo-list');
let alltodos=[]
try {
    // Attempt to parse the stored data, check if it's valid JSON
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        alltodos = JSON.parse(storedTodos);
    }
} catch (e) {
    // If there's an error (invalid JSON), start with an empty array
    console.error('Error parsing todos from localStorage:', e);
    alltodos = [];
}

todoForm.addEventListener('submit',function(e){
    e.preventDefault();
    addToDo();
    
})
function addToDo(){
    const todotext=todoinput.value.trim();
    if(todotext===''){
        alert("please enter a to do");
    }
    else{
        alltodos.push({ text: todotext, checked: false });
        updatetodolist();
        savetodos();
        todoinput.value="";
    }
    
}
function updatetodolist(){
    todolist.innerHTML="";
    alltodos.forEach((todo,todoindex)=>{
        todoitem=createtodoItem(todo,todoindex);
        todolist.append(todoitem);
        todoinput.value="";
    })
}
function createtodoItem(todo, todoindex) {
    const todoid = "todo-" + todoindex;
    const todoli = document.createElement("li");
    todoli.className = "todo";

    todoli.innerHTML = `
        <input type="checkbox" id="${todoid}" ${todo.checked ? 'checked' : ''}>
        <label class="custombox" for="${todoid}"><img src="assets/target.png"></label>
        <label class="todo-text" for="${todoid}">${todo.text}</label>
        <button class="deletebtn" data-index="${todoindex}"> <img src="assets/paper.png" alt="delete"></button>
    `;

    // Add event listener to the checkbox
    const checkbox = todoli.querySelector(`#${todoid}`);
    checkbox.addEventListener('change', function () {
        alltodos[todoindex].checked = checkbox.checked; // Update the checked state
        savetodos();
    });

    // Add event listener to the delete button
    const deleteBtn = todoli.querySelector('.deletebtn');
    deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the li click event from triggering
        deleteTodo(todoindex);
    });
    function deleteTodo(todoindex) {
        alltodos.splice(todoindex, 1); // Remove the task at the given index
        updatetodolist(); // Re-render the updated task list
        savetodos(); // Save the new state to localStorage
    }

    return todoli;
}

function savetodos() {
    localStorage.setItem('todos', JSON.stringify(alltodos)); // Store updated list in localStorage
}

// Initial load of to-do list
updatetodolist();