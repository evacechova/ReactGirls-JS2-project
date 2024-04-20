import { getData } from "./get-data.js";

const studentInfo = (student) => {
    return `<tr><td><a href="detail.html?id=${student.id}">${student.firstName} ${student.lastName}</a></td><td>${student.gender}</td><td>${student.house}</td><td>${student.year}</td><td>
    <a href="edit.html">Edit</a> <button type="button" class="btn btn-danger student-delete">Delete</button>
</td></tr>`;
};

const chartHeader = () => {
    return "<thead><tr><th>Name</th><th>Gender</th><th>House</th><th>Year</th></tr></thead>";   
}

const studentsChart = document.querySelector("#students-chart");

let students;

try {
    
    students = await getData("http://localhost:8080/students/");
    studentsChart.innerHTML = chartHeader() + students.map((student) => studentInfo(student)).join("");

    //console.log(students)
    //console.log(compileStudentInfo(students[0]))

} catch (error) {
    console.log(error);
};
