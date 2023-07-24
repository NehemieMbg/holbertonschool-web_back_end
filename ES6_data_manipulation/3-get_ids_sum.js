export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return studentsList.reduce((total, student) => student.id + total, 0);
}
