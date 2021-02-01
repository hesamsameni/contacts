const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const ContactsRoutes = require('./routes/contact')
const mysqlConnection = require('./connection')

var app = express()
app.use(bodyParser.json())

app.use('/contacts', ContactsRoutes)

app.listen(3434)
