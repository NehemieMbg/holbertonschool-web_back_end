const http = require('http');
const countStudent = require('./3-read_file_async');

const filePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the list of our students');
    countStudent(filePath)
      .then((data) => {
        res.write(data.join('\n'));
        res.end();
      })
      .catch(() => res.end('Cannot load the database'));
  }
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

module.exports = app;
