const express = require('express')
const app = express()

require('dotenv').config()

const { Pool } = require('pg');
const pool = new Pool();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/todo',(req, res) => {
  pool.query('SELECT * FROM todo', (err, rows) => {
    // res.json(res.rows);
    res.send(JSON.stringify(rows.rows));
  })
    
})

app.post('/todo', (req, res) => {
    res.send('created todo')
})

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
});