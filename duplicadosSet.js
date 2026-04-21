//Remover duplicados de array
const numeros = [1, 2, 2, 3, 4, 4, 5];

const semDuplicados = [...new Set(numeros)];

console.log(semDuplicados);