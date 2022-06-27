const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Livro = require('./models/livro');

mongoose.connect('mongodb+srv://Cruzeta:<juliof@c1l1996>@serverpadrao.mwumm.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log("Conexão OK")
}).catch(() => {
  console.log("Conexão NOK")
});
app.use(bodyParser.json());

const livros = [
  {
    id: '1',
    titulo: 'Senhor dos Anais',
    autor: 'Jorginho',
    pagNum: 134
  },
  {
    id: '2',
    titulo: 'Anais secrétos',
    autor: 'Bondinho',
    pagNum: 149
  },
]

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.post('/api/livros', (req, res, next) => {
  const livro = new Livro({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    pagNum: req.body.pagNum
  })
  livro.save();
  console.log(livro);
  res.status(201).json({mensagem: 'Livro inserido.'})
});

//localhost:3000/api/livros
app.use('/api/livros', (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    livros: livros
  })
})

module.exports = app
