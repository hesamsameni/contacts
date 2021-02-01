const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'J<"k6nw:4Jbpa<rH',
  database: 'Contacts',
  multipleStatements: true,
})

mysqlConnection.connect((error) => {
  if (!error) {
    console.log('Connected!')
  } else {
    console.log('Connection Failed: ' + error)
  }
})

module.exports = mysqlConnection
