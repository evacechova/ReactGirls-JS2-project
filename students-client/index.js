import { deleteStudent, fetchStudents } from "./rest-api-client.js";

const students = await fetchStudents();

const renderStudents = (student) => {
    return `<tr><td><a href="detail.html?id=${student.id}">${student.firstName} ${student.lastName}</a></td><td>${student.gender}</td><td>${student.house}</td><td>${student.year}</td><td>
    <a href="edit.html?id=${student.id}">Edit</a> <button id="delete-button-${student.id}" type="button" class="btn btn-danger student-delete">Delete</button>
</td></tr>`;
};

const chartHeader = () => {
    return "<thead><tr><th>Name</th><th>Gender</th><th>House</th><th>Year</th></tr></thead>";   
}

const studentsChart = document.querySelector("#students-chart");

try {
    studentsChart.innerHTML = chartHeader() + students.map((student) => renderStudents(student)).join("");

} catch (error) {
    console.log(error);
};

students.forEach((student) => {
    document.querySelector(`#delete-button-${student.id}`).addEventListener("click", async () => {
        await deleteStudent(student.id);
        const students = await fetchStudents();
        studentsChart.innerHTML = chartHeader() + students.map((student) => renderStudents(student)).join("");
    });
});

//renderStudents(students);

