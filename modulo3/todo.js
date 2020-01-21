var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var textLink = document.createTextNode('  Excluir');
        linkElement.setAttribute('href','#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','apagar('+pos+')');

        linkElement.appendChild(textLink);    

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function apagar(pos){  
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = function(){
    var newtodo = inputElement.value;
    todos.push(newtodo);

    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

