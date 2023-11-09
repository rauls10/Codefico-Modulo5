let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

  let tarefas2 = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

  //1
  for (i = 0; i <= tarefas.length - 1; i++){
    console.log(`Posição ${i + 1} | Descrição: ${tarefas[i]}`);
  }

  //2
  function verifica(tarefa){
    return !tarefa.includes("Feito");
  }
  let tarefasPendentes = tarefas.filter(verifica);
  console.log('\nTarefas Pendentes');
  console.log(tarefasPendentes);

  //3
  listaordenada = tarefas2.sort();
  console.log('\nLista Ordenada');
  console.log(listaordenada);

  //4
  const primeirasTarefas = tarefas.slice(0,2);
  console.log(primeirasTarefas);

  //5
  tarefas.pop();
  let listaatualizada = tarefas;
  console.log('\nÚltimo item removido da lista original');
  console.log(listaatualizada);

  //6 
  tarefas.push("Ler livro novo");
  console.log('\nNovo item no final');
  console.log(tarefas);