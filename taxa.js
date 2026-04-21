//Adicione uma taxa aos valores, taxa = 10% do valor;
const pedidos = [
  { id: 1, valor: 100 },
  { id: 2, valor: 200 }
];

const resultado = pedidos.map(pedido => ({
  ...pedido,
  taxa: pedido.valor * 0.1
}));

console.log(resultado);