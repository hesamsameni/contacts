const express = require('express')
const Router = express.Router()
const mysqlConnection = require('../connection')

Router.get('/', function (req, res, next) {
  mysqlConnection.query('SELECT * FROM contacts_list', (err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log('Error on contacts! ' + err)
    }
  })
})

Router.post('/', function (req, res, next) {
  mysqlConnection.query('SELECT * FROM contacts_list', (err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log('Error on contacts! ' + err)
    }
  })
})

module.exports = Router
