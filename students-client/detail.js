import { fetchStudent } from "./rest-api-client.js";

const renderStudent = (studentId, student) => {
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
	studentEditLink.href = `edit.html?id=${studentId}`;
	studentEditLink.innerHTML = `Edit ${student.firstName} ${student.lastName}`;
};

const studentId = new URLSearchParams(location.search).get("id");
const student = await fetchStudent(studentId);
renderStudent(studentId, student);