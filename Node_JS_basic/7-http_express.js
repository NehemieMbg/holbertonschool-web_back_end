const express = require('express');
const countStudent = require('./3-read_file_async.js');

const app = express();
const port = 1245;

const path = process.argv[2];

console.log(path);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const studentsList = await countStudent(path);
  res.send(studentsList);
});

app.listen(port);
module.exports = app;
