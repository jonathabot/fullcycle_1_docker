const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb',
};

app.get('/', (req, res) => {
  const connection = mysql.createConnection(dbConfig);
  const sqlInsert = `INSERT INTO people(name) values('Jonatha')`;
  connection.query(sqlInsert, (error, _results, _fields) => {
    getSelect(connection, res)
  });
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT} 🚀`);
});

function getSelect(connection, res) {
  const SELECT_QUERY = `SELECT id, name FROM people`;
  connection.query(SELECT_QUERY, (error, results) => {
    res.send(`
  <h1> Full Cycle Rocks!</h1 >
  ${results
        .map(
          (person) => `
          <div>
            <span>${person.id}</span>
            <span>${person.name}</span>
          </div>
        `
        )
        .join('')
      }
    `);
  });
  connection.end();
}