var mysqlConnection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
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
