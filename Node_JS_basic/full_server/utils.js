const fs = require('fs');

async function readDatabase(pathname) {
  // turn the readFile synchronous function to an ansynchronous function
  const readFile = util.promisify(fs.readFile);

  try {
    const data = await readFile(pathname, 'utf8');

    const studentData = data.split('\n').slice(1, -1);
    const CS = studentData
      .filter((student) => student.split(',')[3] === 'CS')
      .map((student) => student.split(',')[0]);

    const SWE = studentData
      .filter((student) => student.split(',')[3] === 'SWE')
      .map((student) => student.split(',')[0]);

    return {
      CS: CS,
      SWE: SWE,
    };
  } catch (error) {
    throw new Error(error);
  }
}
