const fs = require('fs');

module.exports = function countStudents(path) {
  const pathname = `${process.cwd()}/${path}`;

  try {
    const data = fs.readFileSync(pathname, 'utf8');
    const dataArray = data.split('\n').slice(1, -1);
    const dataArrObj = dataArray.map((student) => {
      const studentData = student.split(',');
      return {
        name: studentData[0],
        lastname: studentData[1],
        age: studentData[2],
        filed: studentData[3],
      };
    });

    const fieldCS = dataArrObj
      .filter((student) => student.filed === 'CS')
      .map((student) => student.name);

    const fieldSWE = dataArrObj
      .filter((student) => student.filed === 'SWE')
      .map((student) => student.name);

    console.log(`Number of students: ${dataArrObj.length}`);
    console.log(
      `Number of students in FIELD: ${fieldCS.length} List:  ${fieldCS.join(
        ', '
      )}`
    );
    console.log(
      `Number of students in FIELD: ${fieldSWE.length} List:  ${fieldSWE.join(
        ', '
      )}`
    );
  } catch (error) {
    // If the database if not available
    throw new Error('Cannot load the database');
  }
};
