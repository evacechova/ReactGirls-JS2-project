import { getData } from "./get-data.js";

const compileStudentInfo = (students) => {
    return `<tr><td>${students.firstName} ${students.lastName}</td><td>${students.gender}</td><td>${students.house}</td><td>${students.year}</td></tr>`;
}



const studentsChart = document.querySelector("#students-chart")

let students;

try {
    students = await getData("http://localhost:8080/students/");

    //console.log(students)
    //console.log(compileStudentInfo(students[0]))
//fce
} catch (error) {
    console.log(error);
}
