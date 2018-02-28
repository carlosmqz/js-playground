const form = document.querySelector('form');
const todoList = document.getElementById('todoList');
const btnClearTasks = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

document.onload = (function(e){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(task){
           addNewTask(task);
        })
})()

btnClearTasks.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
    localStorage.removeItem('tasks');
});

filter.addEventListener('keyup', filterTasks);

form.addEventListener('submit',function(e){
    const newTask = document.getElementById('newTask').value;
    if(newTask === ''){
        alert('Add a task');
    }else{
        let tasks;
    
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(newTask);
        addNewTask(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));    
    }
    e.preventDefault();
});


function addNewTask(task){
    let li = document.createElement('li');
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(task))
    let link = document.createElement('a');
    link.setAttribute('href', '#')
    link.className = 'secondary-content';
    link.innerHTML = '<i class="material-icons">clear</i>';
    link.addEventListener('click',removeTask);
    li.appendChild(link);
    todoList.appendChild(li); 
    document.getElementById('newTask').value ='';
}

function removeTask(e){
    let tasks;
    let i;
    tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    i = tasks.indexOf(e.target.parentElement.parentNode.firstChild.data);
    tasks.splice(i,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    e.target.parentElement.parentNode.remove();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !== -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}