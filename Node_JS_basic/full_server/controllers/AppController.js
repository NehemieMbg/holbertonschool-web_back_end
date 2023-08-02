export class AppController {
  static getHomeppage(request, response) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
  }
}
