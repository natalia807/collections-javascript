const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 }
];

const resultado = produtos.map(produto => `${produto.nome} - R$ ${produto.preco}`);

console.log(resultado);