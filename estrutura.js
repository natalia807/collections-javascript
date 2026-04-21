const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" }
];

const resultado = usuarios.map(usuario => ({
  [usuario.id]: usuario.nome //propriedade dinâmica
}));

console.log(resultado);