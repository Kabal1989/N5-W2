const mongoose = require('mongoose');

const banco = mongoose.connection;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect('mongodb://localhost/livraria', options);

module.exports = banco;