const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  titulo: String,
  autor: String,
  ano: Number,
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;