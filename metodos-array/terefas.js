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

console.log("Com novas tarefas adicionadas:");
tarefas.push("Jantar", "Dormir");
console.table(tarefas);

let removerTarefa = tarefas.pop();
console.log(`Com a terefa "${removerTarefa}" removida:`);
console.table(tarefas);

