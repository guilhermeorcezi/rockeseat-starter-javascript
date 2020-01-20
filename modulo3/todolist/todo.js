var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Tomar Café',
    'Estudar JavaScript',
    'Ouvir Lo-Fi'
];

function renderTodos(){
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

buttonElement.onclick = function(){
    var newtodo = inputElement.value;
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(newtodo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
}

renderTodos();