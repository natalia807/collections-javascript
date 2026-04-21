const nomes = ["Ana Silva", "Carlos Souza", "Maria Oliveira"];

const resultado = nomes.map(nome => {
  const partes = nome.split(" ");
  const inicial1 = partes[0][0];
  const inicial2 = partes[1][0];

  return inicial1 + inicial2;
});

console.log(resultado);