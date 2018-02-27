/*let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[1];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val)*/

//DOM Selectors
//document.getElementById()

/* console.log(document.getElementById('task-title'));
//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');
//Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#FFF';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none';

//Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task list</span>' */

//document.querySelector()
/* console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; */

//document.getElementsByClassName
/* const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems); */

//document.getElementsByTagName
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello'; 

// //Convert HTML Collection into an Array
// let lisArr = Array.from(lis);

// lisArr.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// })

//document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// //Get child nodes
// val = list.childNodes;

// //Get children element nodes
// val = list.children;
// val = list.children[0];

// list.children[0].textContent = 'Hello';
// //Children of children
// val = list.children[3].children[0];
// //first child
// val = list.firstChild;
// val = list.firstElementChild; //No text nodes.
// //last child
// val = list.lastChild;
// val = list.lastElementChild;

// //count child elements.
// val = list.childElementCount;

// //Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// //Get previous sibling
// val = listItem.previousSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// console.log(val);

//Create element to add it to HTML form
// const li = document.createElement('li');

// //Add a class
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title','New Item');
// //Create text node and append
// li.appendChild(document.createTextNode('Hello World!'));

// //Create new link element
// const link = document.createElement('a');
// //add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML =  '<i class="fa fa-remove"></i>';

// //Append link into li
// li.appendChild(link);

// //append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li)

//Replace elements
//Create an element
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// //Get old heading
// const oldHeading = document.getElementById('task-title');
// //Parent 
// const cardAction = document.querySelector('.card-action');

// //replace
// cardAction.replaceChild(newHeading, oldHeading);

// //Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list item
// lis[0].remove();

// //Remove child element
// list.removeChild(lis[3]);

// //Classes and attributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// //CLASSES
// let val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// //ATTRIBUTES
// val = link.getAttribute('href');
// val = link.setAttribute('href','https://google.com');
// link.setAttribute('title', 'google');
// val = link.hasAttribute('title');
// val = link;
// link.removeAttribute('title');

// console.log(val);

//*******************EVENTS*****************************
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');
//     e.preventDefault();
    
// })

// document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
// function onClick(e){
//     let val;
//     val = e;
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     //Event Type
//     val = e.type;
//     //timestamp
//     val = e.timeStamp;
//     //coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     //coords event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //Click
// //clearBtn.addEventListener('click', runEvent);
// //Double Click
// //clearBtn.addEventListener('dblclick', runEvent);
// //clearBtn.addEventListener('mousedown', runEvent);
// //clearBtn.addEventListener('mouseup', runEvent);
// // card.addEventListener('mouseenter', runEvent);
// // card.addEventListener('mouseleave', runEvent);
// // card.addEventListener('mouseover', runEvent);
// // card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove',runEvent);

// //Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
// }

//Keyboard and input events
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');

// taskInput.value = '';
// form.addEventListener('submit', runEvent);
//taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);
//taskInput.addEventListener('keypress', runEvent);
//taskInput.addEventListener('focus', runEvent);
//taskInput.addEventListener('blur', runEvent);
//taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);


// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     console.log(e.target.value);
//     console.log(taskInput.value);
//      e.preventDefault();
// }

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }

//set local storage item
//localStorage.setItem('name','John');

// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value;
//     let tasks;

//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('task saved');
//     e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function(task){
//     console.log(task);
// })