const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 }
];

//Regra: caro = preço > 1000

const resultado = produtos.map(produto => ({
  nome: produto.nome,
  preco: produto.preco,
  caro: produto.preco > 1000
}));

console.log(resultado);