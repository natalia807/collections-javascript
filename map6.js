//Crie um novo array onde: o preço aumente 10%

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 }
];

const aumento = produtos.map(produto => (produto.preco * 0.10) + produto.preco);

console.log(aumento);