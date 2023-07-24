export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return studentsList.map((obj) => {
    return obj.id;
  });
}
