import { RecintosZoo } from "./recintos-zoo.js";
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntarRecintos() {

  rl.question('Digite o nome do animal (sem acento ou til): ', (nomeAnimal) => {

    rl.question('Digite a quantidade: ', (quantidade) => {

      const quantidadeNumero = parseInt(quantidade, 10); //10 -> base decimal

      console.log(new RecintosZoo().analisaRecintos(nomeAnimal.toUpperCase(), quantidadeNumero));

      rl.question('Deseja continuar? (s ou S = sim / qualquer outra coisa = não): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
          perguntarRecintos();
        } else {
          rl.close();
        }
      });
    });
  });
}


perguntarRecintos();

