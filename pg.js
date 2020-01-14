require("dotenv").config();
// const { Client } = require('pg')
// const client = new Client()
// client.connect(
const {Pool} = require('pg');
const pool = new Pool();

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// pool.connect((err, client, done) => {
//   if (err) throw err
//   client.query('SELECT * FROM todo', [], (err, res) => {
//     done()
//     console.log(err ? err.stack : res.rows[0])

//   })
// })

pool.query('SELECT * FROM todo', (err, res) => {
    console.log(err ? err.stack : res.rows[0]) // Hello World!
})

pool.end();

// client.query('SELECT * FROM todo', [], (err, res) => {
//   console.log(err ? err.stack : res.rows[0]) // Hello World!
//   client.end()
// })
