const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'database',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'agenda-petshop',
  multipleStatements: true
})

module.exports = conexao
