// 1 - referenciar o imput
let input = document.getElementsByName("tarefa");
// 2 - referenciar o button
let botao = document.getElementById('botao');
// 3 - referenciar a lista
let lista = document.getElementById("lista");

let tarefas = [
    'Jogar GTA 5',
    'Estudar Python',
    'Ver um filme',
    'Ler um livro'
];

// renderizando a lista de tarefas
function renderizarTarefas()
{
    for(tarefa of tarefas) // para cada tarefa da lista de tarefas faça...
    {
        // criaro item da lista
        let itemLista = document.createElement('li');
        // adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');
        // criar um texto filho da lista
        let itemTexto = document.createTextNode(tarefa);
        // adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);
        // adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// executando a função para renderizar as tarefas
renderizarTarefas();