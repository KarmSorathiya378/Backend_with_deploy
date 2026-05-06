require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello0 World!')
})

app.get('/youtube', (req, res) => {
    res.send('KarmSorathiya')
})

app.get('/account', (req, res) => {
    res.send("<h1>You have 11 digits in your account</h1>")
})    

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})