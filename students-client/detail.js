import { getData } from "./get-data.js";


const renderStudent = (student) => {
	document.querySelector("#student-detail-table").innerHTML = `
		<tbody>
			<tr>
				<th>Name</th>
				<td>${student.firstName} ${student.lastName}</td>
			</tr>
			<tr>
				<th>Gender</th>
				<td>${student.gender}</td>
			</tr>
			<tr>
				<th>House</th>
				<td>${student.house}</td>
			</tr>
			<tr>
				<th>Year</th>
				<td>${student.year}</td>
			</tr>
		</tbody>
	`;

	const studentEditLink = document.querySelector("#student-edit-link");
	studentEditLink.innerHTML = `Edit ${student.firstName} ${student.lastName}`;
};

const studentId = new URLSearchParams(location.search).get("id");
const studentRequest = await fetch(`http://localhost:8080/students/${studentId}`);
const student = await studentRequest.json();
renderStudent(student);
