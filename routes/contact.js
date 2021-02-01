const express = require('express')
const Router = express.Router()
const mysqlConnection = require('../connection')

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Contacts', (err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log('Error on contacts! ' + err)
    }
  })
})

module.exports = Router
