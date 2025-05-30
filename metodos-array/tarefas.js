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

