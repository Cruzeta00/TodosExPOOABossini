const express = require('express')
const app = express()

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

//localhost:3000/api/livros
app.use('/api/livros', (req, res) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    livros: livros
  })
})

module.exports = app
