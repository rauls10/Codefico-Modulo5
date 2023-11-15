function adicionarTarefa(){
    const tarefa = document.getElementById('tarefa').value;
    const tarefas = document.getElementById('listaTarefas');

    const novatarefa = document.createElement('li');
    novatarefa.innerHTML = `
    <p>${tarefa}</p>
    <button onclick='removerTarefa(this)'>REMOVER</button>
    `;
    tarefas.appendChild(novatarefa);
    document.getElementById('tarefaForm').reset();
}
function removerTarefa(button){
    const tarefa = button.parentNode;
    tarefa.remove();
}