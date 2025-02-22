const tarefas = [
  { id: 1739220546861, nome: "Estudar JavaScript", concluida: false },
];
function listarTarefas() {
  return tarefas;
}

function adicionarTarefa(nomeTarefa) {
  const novaTarefa = {
    id: Date.now().toString(),
    nome: nomeTarefa,
    concluida: false,
  };
  tarefas.push(novaTarefa);
}

function removerTarefa(idTarefa) {
  const posicao = tarefas.findIndex((task) => task.id === parseInt(idTarefa));
  if (posicao !== -1) {
    tarefas.splice(posicao, 1);
  }
}

function modificarTarefa(idTarefa, tarefaModificada) {
  const tarefaLocalizada = tarefas.find(
    (tarefa) => tarefa.id === parseInt(idTarefa)
  );
  console.log(tarefaLocalizada)
  if (tarefaLocalizada) {
    Object.assign(tarefaLocalizada, tarefaModificada);
  }
}

export { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa };
