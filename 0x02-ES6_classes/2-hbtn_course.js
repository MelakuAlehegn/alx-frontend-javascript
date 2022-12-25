export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  setLength(length) {
    this._length = length;
  }

  getLength() {
    return this._length;
  }

  setStudents(students) {
    this._students = students;
  }

  getStudents() {
    return this._students;
  }
}
