const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

module.exports = app;
