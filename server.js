const express = require('express')
const bodyParser = require('body-parser')
const ContactsRoutes = require('./routes/contacts')

var app = express()
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3434/') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/contacts', ContactsRoutes)

app.listen(3434)
