interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(input: printTeacherFunction) : string {
    return `${input.firstName[0]}. ${input.lastName}`
}

const teacher: printTeacherFunction = {
    firstName: "John",
    lastName: "Doe"
}

console.log(printTeacher(teacher));

interface studentInterface{
    firstName:string;
    lastName:string;
    workOnHomework(): string;
    displayName():string;
}

class StudentClass implements studentInterface{
    firstName: string;
    lastName:string;
    constructor(firstName:string, lastName:string;){
       this.firstName = firstName,
       this.lastName = lastName
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName
    }
}
console.log(StudentClass())