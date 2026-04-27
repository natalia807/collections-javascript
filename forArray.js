//Percorrer array mostrando todos os nomes
const nomes = ["Ana", "Carlos", "Maria"];

for (const value of nomes){
    console.log(value);
}

//Somar todos os valores do Array
const numeros = [5, 10, 15];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
}

console.log(soma);