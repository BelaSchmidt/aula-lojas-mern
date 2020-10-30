const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'API está funcionando!', data: 'oi' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5000, console.log('Servidor iniciado na porta 5000'));
