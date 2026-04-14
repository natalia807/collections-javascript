//Mostrar apenas o nome dos produtos no novo array
const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 }
];

const produtos2 = produtos.map(produto => produto.nome);

console.log(produtos2);


