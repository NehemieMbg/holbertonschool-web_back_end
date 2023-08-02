import readDatabase from './utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    const firstLine = 'This is the list of our students\n';

    try {
      const students = await readDatabase('./database.csv');

      const CS = `Number of students in CS: ${
        students.CS.length
      }. List: ${students.CS.join(', ')}\n`;

      const SWE = `Number of students in SWE: ${
        students.SWE.length
      }. List: ${students.SWE.join(', ')}\n`;

      const lines = `${firstLine}${CS}${SWE}`;

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(lines);
      res.end();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write('Cannot load the database');
      res.end();
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      const major = req.params.major;

      if (major !== 'CS' || major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(
        `Number of students in ${major}: ${data[major].length}. List: ${data[
          major
        ].join(', ')}\n`
      );
      res.end();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write('Cannot load the database');
      res.end();
    }
  }
}
