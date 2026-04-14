const usuarios = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 30 }
];

const resultado = usuarios.map(usuario => ({
  nome: usuario.nome,
  maior: usuario.idade >= 18
}));

console.log(resultado);