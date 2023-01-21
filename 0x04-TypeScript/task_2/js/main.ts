interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
}
// console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(input: printTeacherFunction): string {
    return `${input.firstName[0]}. ${input.lastName}`
}

const teacher: printTeacherFunction = {
    firstName: "John",
    lastName: "Doe"
}

// console.log(printTeacher(teacher));

interface studentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements studentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
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

interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}
interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }

}
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workDirectorTasks(): string {
        return "Getting to work"
    }
}
function createEmployee(salary: (number | string)): Teacher | Director {
    if (typeof (salary) === "number" && salary < 500) {
        return new Teacher
    }
    return new Director
}
function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director
}
function executeWork(employee: Director | Teacher): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks()
    }
    else if (employee instanceof Teacher) {
        return employee.workTeacherTasks()
    }
} 