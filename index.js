const express = require('express')
const { requestLogger } = require("./utils/logger")
const { unknownEndpoint } = require("./utils/endpoints")
const app = express()

app.use(express.json())

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('HELLO HOME PAGE')
})

app.get('/favicon.ico', (req, res) =>{
  console.log('theres no photo dummy')
})

app.get('/api/about', (req, res) =>{
  res.send('ABOUT PAGE')
})

app.use(unknownEndpoint)

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})