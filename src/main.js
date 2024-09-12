import { RecintosZoo } from "./recintos-zoo.js";
import readlineSync from 'readline-sync';

let continuar = true;

while (continuar) {
  const nomeAnimal = readlineSync.question('Digite o nome do animal: ');
  
  const quantidade = Number(readlineSync.question('Digite a quantidade: '));

  console.log(new RecintosZoo().analisaRecintos(nomeAnimal.toUpperCase(), quantidade));

  const resposta = readlineSync.question('Deseja continuar? (s ou S = Sim / qualquer outra coisa = Nao): ');
  continuar = resposta.toLowerCase() === 's';
}

console.log('Programa encerrado.');
