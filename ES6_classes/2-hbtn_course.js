export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    if (typeof length === 'number') this._length = length;
    if (
      Array.isArray(students) &&
      students.every((ele) => typeof ele === 'string')
    )
      this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (value !== 'string') throw new Error('Name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }
  set length(value) {
    if (value !== 'number') throw new Error('Length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }
  set students(array) {
    if (
      Array.isArray(array) &&
      students.every((ele) => typeof ele === 'string')
    ) {
      this._students.push(...array);
    }
    return;
  }
}
