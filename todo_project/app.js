const form = document.querySelector('form');
const todoList = document.getElementById('todoList');

document.onload = (function(e){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(task){
           addNewTask(task);
        })
})()


form.addEventListener('submit',function(e){
    const newTask = document.getElementById('newTask').value;
   
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(newTask);
    addNewTask(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
});


function addNewTask(task){
    let li = document.createElement('li');
    li.className = 'collection-item'
    li.textContent = task;
    let link = document.createElement('a');
    link.setAttribute('href', '#')
    link.className = 'secondary-content';
    let iTag = document.createElement('i');
    iTag.innerHTML = 'clear';
    iTag.className = 'material-icons';
    iTag.addEventListener('click', removeTask);
    li.appendChild(link);
    link.appendChild(iTag); 
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