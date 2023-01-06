interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: "Melaku",
    lastName: "Aleheg",
    age: 25,
    location: "Ethiopia"
}

const stud2: Student = {
    firstName: "Desire",
    lastName: "Barine",
    age: 21,
    location: "nigeria"
}
const studentsList: Student[] = [stud1, stud2]
const body = document.body
const table = document.createElement('table')
table.innerHTML = (
                `<tr>
                    <td>first name</td>
                    <td>location</td>
                </tr>`
                )

studentsList.forEach((stud: Student): void => {
    const eleme = (
        `<tr>
            <td>${stud.firstName}</td>
            <td>${stud.location}</td>
         </tr>
        `)
        table.innerHTML += eleme
})
body.innerHTML += table
