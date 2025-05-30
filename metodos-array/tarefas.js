let tarefas = [
    'Estudar JavaScript',  
    'Fazer exercícios de matemática',  
    'Lavar a louça',  
    'Comprar mercado',  
    'Ir à academia',  
    'Ler um livro',  
    'Fazer revisão para o teste',  
    'Limpar o quarto',  
    'Estudar para concurso',  
    'Organizar o computador'
];
console.log("Tarefas:");
console.table(tarefas);

//Adicionando novas tarefas no array
console.log("Com novas tarefas adicionadas:");
tarefas.push("Jantar", "Dormir");
console.table(tarefas);

//Removendo a última tarefa do array
let removeUltimaTarefa = tarefas.pop();
console.log(`Com a última terefa "${removeUltimaTarefa}" removida:`);
console.table(tarefas);

//Adicionando uma tarefa no início do array
tarefas.unshift("Acordar");
console.log("Com uma nova tarefa adicionada no início:");
console.table(tarefas);

//Removendo a primeira tarefa do array
let removePrimeiraTarefa = tarefas.shift();
console.log(`Com a primeira tarefa "${removePrimeiraTarefa}" removida:`);
console.table(tarefas)

//Verificando se a tarefa existe
let buscarTarefa = "Ir à academia"
if (tarefas.includes(buscarTarefa)) {
    console.log(`\nA tarefa já existe na lista`);
} else {
    tarefas.push(buscarTarefa);
    console.table(tarefas)
}

//Transformando a lista em string
console.log(`\nArray tarefas como uma String: ${tarefas.join(", ")}\n`);

//Extraindo uma parte da lista
console.log("Alguns itens das Tarefas (índices 2 a 4):", tarefas.slice(2, 5));

//Alterando a lista
let removeTarefa = tarefas.splice(3, 1);
console.log(`\nCom a tarefa do índice 3 removida:`);
console.table(tarefas);

let alteraTarefa = tarefas.splice(3, 0, "Fazer compras");
console.log(`Com a tarefa do índice 3 alterada:`);
console.table(tarefas);
