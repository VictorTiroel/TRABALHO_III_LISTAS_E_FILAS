const MinhaPilha = require("./pilhas");

const bauDoTesouro = new MinhaPilha();
bauDoTesouro.adicionar("Espada de Aço");
bauDoTesouro.adicionar("Escudo de Bronze");
bauDoTesouro.adicionar("Armadura de Ferro");
bauDoTesouro.adicionar("Elmo de Prata");
bauDoTesouro.adicionar("Botas de Couro");
bauDoTesouro.toString();
console.log(bauDoTesouro.topo());
bauDoTesouro.remover();
console.log(bauDoTesouro.base());
bauDoTesouro.removerBase();
bauDoTesouro.toString();
console.log(bauDoTesouro.estavazia());
bauDoTesouro.toString();