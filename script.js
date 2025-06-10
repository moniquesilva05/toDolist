//definir constantes para uso no codigo
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const tasklist = document.getElementById('tasklist');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `lista de tarefa: ${nome}`;


    titulo.innerHTML = `lista de tarefa: ${nome}`;

//acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click", criaTarefa);

function criaTarefa(){
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    //pai      recebe     filho 
    tasklist.appendChild(listItem);
//criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id = "remove"
    removeButton.textContent = "x"
    listItem.appendChild(removeButton);

    removeButton.addEventListener("click", function(){
        tasklist.removeChild(listItem)
    })
//criar botão de concluir tarefa
    const concluirButton = document.createElement('butto');
    concluirButton.id ="conclui";
    concluirButton.textContent = "✓"
    listItem.appendChild(concluirButton);

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    concluirButton.addEventListener("click", function(){
        listItem.classList.toggle('completed');
    })
}