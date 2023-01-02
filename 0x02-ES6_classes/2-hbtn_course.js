export default class HolbertonCourse {
  constructor(name, length, students) {
    
    this._length = length;
    this._students = students;
    if (isNaN(length)){
        this._name = name;  
    }
    else{

    }
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
