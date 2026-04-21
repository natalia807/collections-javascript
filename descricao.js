const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 30 }
];

const resultado = pessoas.map(pessoa => {
  return `${pessoa.nome} tem ${pessoa.idade} anos`;//template string: crase
});

console.log(resultado);