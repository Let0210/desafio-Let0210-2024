# RECINTOS DO ZOO

### BAIXANDO A ESTRUTURA
Para baixar a estrutura base do desafio no formato zip, basta clicar neste [link](https://dev.azure.com/db-tecnologia/99dbf7ce-dadd-40d3-b827-e1648cb6a262/_apis/git/repositories/877e7dfb-78ea-465e-bd88-9dbf83120933/items?path=/&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=zip&api-version=5.0&download=true).

### ENTREGANDO O DESAFIO
Após resolvê-lo e validá-lo com os testes (mais detalhes nos tópicos abaixo), o desafio tem de ser publicado em um repositório **público** no [Github](https://github.com/) com o **nome** de `desafio-seuUsername-2024` (substituir "seuUsername" pelo nome de usuário do GitHub) e colocar o código na **branch** `main`.

Se você ainda não teve contato com essa ferramenta, não tem problema. Separamos um material para lhe ajudar nessa etapa: [Como usar Git e Github na prática](https://www.youtube.com/watch?v=UBAX-13g8OM).

## O DESAFIO
Olá! Você foi contratado para ajudar na organização de um zoológico.
Sua missão será construir a lógica para indicar os recintos onde novos animais se sintam confortáveis.

### RECINTOS EXISTENTES

 O zoológico possui os seguintes recintos disponíveis.

  | número    | bioma             | tamanho total |  animais existentes |
  |-----------|-------------------|---------------|---------------------|
  | 1         | savana            |   10          |   3 macacos         |
  | 2         | floresta          |    5          |   vazio             |
  | 3         | savana e rio      |    7          |  1 gazela           |
  | 4         | rio               |    8          |   vazio             |
  | 5         | savana            |    9          |  1 leão             |

### ANIMAIS

 O zoológico só está habilitado a tratar dos animais abaixo.
 A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

  | espécie    | tamanho | bioma                |
  |------------|---------|----------------------|
  | LEAO       |   3     |  savana              |
  | LEOPARDO   |   2     |  savana              |
  | CROCODILO  |   3     |  rio                 |
  | MACACO     |   1     |  savana ou floresta  |
  | GAZELA     |   2     |  savana              |
  | HIPOPOTAMO |   4     |  savana ou rio       |

### REGRAS PARA ENCONTRAR UM RECINTO

1) Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
2) Animais carnívoros devem habitar somente com a própria espécie
3) Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
4) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
5) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
6) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
7) Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!).
Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.

### ENTRADAS E SAÍDAS

1) O programa deve receber tipo e quantidade de animal (nessa ordem)
2) O programa deve retornar uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
3) A lista de recintos viáveis deve indicar o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: valorlivre total: valortotal)"
4) Caso animal informado seja inválido, apresentar erro "Animal inválido"
5) Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
6) Caso não haja recinto possível, apresentar erro "Não há recinto viável"

### EXEMPLOS

Entrada para um caso válido
```js
"MACACO", 2
```
Saída
```js
{
  recintosViaveis: ["Recinto 1 (espaço livre: 5 total: 10)", 
   "Recinto 2 (espaço livre: 3 total: 5)", 
   "Recinto 3 (espaço livre: 2 total: 7)"]
}
```

Entrada para um caso inválido
```js
"UNICORNIO", 1
```
Saída
```js
{
  erro: "Animal inválido"
}
```

### O CÓDIGO
Você está recebendo uma estrutura básica para desenvolver a lógica do desafio. O arquivo principal está localizado dentro da pasta `src` e se chama `recintos-zoo.js`. Você pode desenvolver a sua lógica criando outros arquivos, métodos e até mesmo outras classes, porém o resultado deve poder ser obtido através do método `analisaRecintos`.

> **ALERTA**:
> É importante que essa estrutura básica não seja alterada, pois as etapas automáticas da nossa validação dependem disso. Conseguir executar os passos descritos mais adiante na seção `VALIDANDO A SOLUÇÃO` também ajudará você a verificar que seu código segue a estrutura definida.

Exemplo de chamada
```js
  new RecintosZoo().analisaRecintos('MACACO', 2);
```

### INSTALANDO E RODANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você está recebendo alguns cenários de testes no arquivo `recintos-zoo.test.js` para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários existentes ou novos, rode o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### VALIDANDO A ENTREGA
Para garantir que seu desafio vai ser considerado entregue, revise os seguintes pontos:

#### GIT
O repositório deve ser **público** e ter o **nome** e **branch** indicados na seção `ENTREGANDO O DESAFIO`.

Para verificar que o repositório é público, deslogue-se do github e tente ver o código. Se conseguir, nós também conseguimos! Lembrando que vamos usar o link para o usuário informado durante o cadastro na Gupy. Veja [como alterar a visibilidade](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility).

#### CÓDIGO
A solução deve ser entregue em **javascript** e a **estrutura de pastas e arquivos** deve seguir o indicado na seção `O CÓDIGO`.

O **export** da classe deve ser mantido da seguinte maneira para compatibilidade com o arquivo de testes:
```js
export { RecintosZoo as RecintosZoo };
```

Se todos os passos forem seguidos corretamente, você terá um repositório como o da figura abaixo (lembrando que é permitido criar mais arquivos), onde `seuUsername` é o seu usuário do GitHub, que você informou no questionário da Gupy.

![Exemplo de repositório](https://startdbstorage.blob.core.windows.net/filecontainer/imagem-estrutura.png)

## A MINHA SOLUÇÃO
### 1. COMO EXECUTAR
O usuário pode interagir com o programa de duas formas: digitando através do próprio console (seja da IDE de sua preferência, seja do prompt de comando) ou através de uma página web HTML rodando no servidor local.

#### 1.1. VIA TERMINAL
Aqui é onde ocorre a forma de execução mais simples, via console. Para iniciar o programa basta estar dentro da pasta `src` e digitar no terminal `node main.js`, mas antes é necessário instalar o módulo `readline-sync` através do comando `npm install readline-sync`. Feito isso, usuário indicará o nome do animal (pode ser escrito com letras maiúsculas ou minúsculas, pois no fim o programa converte tudo para maiúsculo) e a quantidade. Em seguida o resultado é mostrado e há a possbilidade de continuar ou parar a execução.

![Exemplo de execução via terminal](https://github.com/Let0210/desafio-Let0210-2024/blob/main/imagens/exemplo%20execu%C3%A7%C3%A3o%20via%20terminal.png)

#### 1.2. VIA PÁGINA WEB
Será necessário ativar o servidor local para executar o arquivo `index.html`. Dentro da IDE que utilizei, o *VS Code*, isso é feito da seguinte maneira:

1. Na aba `Extensions`, faça o download da extensão `Live Server`.
2. Clique no arquivo `index.html` com o botão esquerdo do mouse e selecione a opção `Open with Live Server`.
3. Agora, com a página aberta, a interação se dá inserindo o nome do animal e quantidade nos campos correspondentes. Ao selecionar o botão `Analisar Recintos` o resultado será exibido logo abaixo.

![Exemplo de execução via página web](https://github.com/Let0210/desafio-Let0210-2024/blob/main/imagens/exemplo%20execu%C3%A7%C3%A3o%20via%20p%C3%A1gina%20web.png)

### 2. O QUE ADICIONEI
Como já foi mencionado anteriormente, a estrutura base do projeto veio com os arquivos de configuração `jest.config.js`, `package-lock.json`, `package.json` e os arquivos de código propriamente ditos `recintos-zoo.js` e `recintos-zoo.test.js`. As alterações que fiz foram em relação a esses dois últimos arquivos e à criação de dois novos: `main.js` e `index.html`.

#### 2.1. ARQUIVO `recintos-zoo.js`
1. Dentro da classe `RecintosZoo` criei as estruturas de dados correspondentes às características de cada espécie e às características de cada recinto.
2. No método `analisaRecintos` adicionei trechos de código (comentados) referentes a cada restrição presentes na seção `REGRAS PARA ENCONTRAR UM RECINTO` e um último trecho para retornar o resultado.

#### 2.2. ARQUIVO `recintos-zoo.test.js` 
Além dos que já exisitiam, adicionei os seguintes testes:
1. Deve encontrar recinto para 1 hipopótamo (respeitando a regra com espécies diferentes).
2. Não deve permitir que um macaco fique sozinho em um recinto, como o 2.
3. Deve encontrar recinto para 1 leão.
4. Não deve encontrar recintos para 1 leopardo.

Com essas novas situações o arquivo de teste foi capaz de contemplar todas as linhas do método `analisaRecintos` da classe `RecintosZoo`.

#### 2.3. ARQUIVO `main.js`   
É o arquivo que viabiliza a execução via console. Funciona criando uma interface simples através do módulo `readline-sync`, responsável por armazenar as informações digitadas pelo usuário para que depois possam ser devidamente enviadas ao método `analisaRecintos` da classe `RecintosZoo`. A inter

#### 2.4. ARQUIVO `index.js`
Aqui basicamente têm-se uma estrutura html estilizada que monta a parte visual da página web, manda as respostas digitadas pelo usuário nos campos de formulário para o método `analisaRecintos` da classe `RecintosZoo` no formato compatível e, por último, mostra as opções de recintos viáveis ou possíveis erros.
