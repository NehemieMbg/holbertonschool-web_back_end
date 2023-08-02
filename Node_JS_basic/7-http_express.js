const express = require('express');
const countStudent = require('./3-read_file_async.js');

const app = express();
const port = 1245;

const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    res.send(await countStudent(path));
    res.end();
  } catch (error) {
    console.error('Error fetching students: ', error);
    res.status(500).end('Internal Server Error');
  }
});

app.listen(port);
module.exports = app;
