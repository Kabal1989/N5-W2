const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');


router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const novoLivro = await incluir(req.body);
    res.json(novoLivro);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
});


router.delete('/:codigo', async (req, res) => {
  const codigo = req.params.codigo;

  try {
    const resultado = await excluir(codigo);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
});

module.exports = router;