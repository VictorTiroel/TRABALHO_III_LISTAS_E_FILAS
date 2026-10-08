const fila = require("./fila.js");


impressora = new fila();
console.log(impressora.enqueue("Relatório de Cadastro de Usuários")); // Adiciona um documento a fila de impressao
console.log(impressora.enqueue("Termo de Adesão ao Sistema"));
console.log(impressora.enqueue("Relatório de Despesas Mensais"));
console.log(impressora.enqueue("Comprovante de Pagamento"));
console.log(impressora.enqueue("Relatório de Vendas"));
console.log(impressora.enqueue("Relatório de Atividades"));
console.log(impressora.enqueue("Ficha de Cadastro de Cliente"));
console.log(impressora.dequeue()); // Remove / "imprime" o primeiro documento da fila de impressão
console.log(impressora.dequeue()); // Remove / "imprime" o segundo documento da fila de impressão
console.log(impressora.enqueue("relatório de revisão")); 
impressora.tostring(); // Exibe a fila de impressão atual