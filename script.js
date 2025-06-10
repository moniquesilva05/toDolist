//definir constantes para uso no codigo
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('trefa');
const tasklist = document.getElementById('tasklist');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `lista de tarefa: ${nome}`;

else{
    titulo.innerHTML = `lista de tarefa: ${nome}`;
}
//acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click", criaTarefa);

fuction criaTarefa(){
    
}