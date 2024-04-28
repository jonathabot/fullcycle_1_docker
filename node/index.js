import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle<h1> Hi')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})