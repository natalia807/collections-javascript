/*Crie um Set vazio, Adicione:
"Ana"
"Carlos"
"Ana" novamente
Mostre o resultado*/

const nomes = new Set();

nomes.add("Ana");
nomes.add("Carlos");
const ana = "Ana";
nomes.add(ana);

console.log(nomes)