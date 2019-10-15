const express = require('express')

const server = express()

server.get('/users', (req, res) => {
  const nome = req.query.nome

  return res.json({ message: `Hello ${nome}` })
})

server.listen(3000)