export default function getStudentsByLocation(studentList, location) {
  if (!Array.isArray(studentList)) [];

  return studentList.filter((student) => student.location === location);
}
