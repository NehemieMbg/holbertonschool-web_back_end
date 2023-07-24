export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades
) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return (
    studentsList
      // Filter the array received
      .filter((student) => student.location === city)
      // Returns an updated version of the array with the new grades
      .map((student) => {
        // Find the grade object that has the same id as the student
        const currGrade = newGrades.find((grade) => {
          if (student.id === grade.studentId) {
            return grade.grade;
          }
        });
        // Past the onject and adds the new grade to the current object
        return {
          ...student,
          grade: currGrade.grade || 'N/A',
        };
      })
  );
}
