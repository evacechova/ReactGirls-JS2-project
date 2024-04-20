import { fetchStudent, updateStudent } from "./rest-api-client.js";

const renderStudent = (student) => {
	document.querySelector("#student-edit-table").innerHTML = `
		<tbody>
			<tr>
				<th>First name</th>
				<td>
                <input id="first-name" type="text" rows="1" value="${student.firstName}">
                </td>
			</tr>
            <tr>
				<th>Last name</th>
                <td>
                <input id="last-name" type="text" rows="1" value="${student.lastName}">
				</td>
			</tr>
			<tr>
				<th>Gender</th>
				<td>
                <input id="gender" type="text" rows="1" value="${student.gender}">
                </td>
			</tr>
			<tr>
				<th>House</th>
                <td>
                <input id="house" type="text" rows="1" value="${student.house}">
                </td>
			</tr>
			<tr>
				<th>Year</th>
				<td>
                <input id="year" type="text" rows="1" value="${student.year}">
                </td>
			</tr>
            <tr>
				<td colspan="2"><button class="btn btn-primary">Save</button></td>
			</tr>
		</tbody>
	`;
};

const studentId = new URLSearchParams(location.search).get("id");
const student = await fetchStudent(studentId);
renderStudent(student);

const handleSubmit = async (event, studentId) => {
    event.preventDefault();
    console.log("Odesíláme formulář");

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const house = document.querySelector("#house").value;
    const gender = document.querySelector("#gender").value;
    const year = document.querySelector("#year").value;

    //místo:
    // const student = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     gender: gender,
    //     house: house,
    //     year: year,
    // };
    //když nenapíšu název proměnné, je stejný jako název vlastnosti
    
    const student = {
        firstName,
        lastName,
        gender,
        house,
        year,
    };

    //console.log("Student:", student)

    await updateStudent(studentId, student);
	location.href = `detail.html?id=${studentId}`;
};   

document.querySelector("#edit-form").addEventListener("submit", (event) => {
    handleSubmit(event, studentId);
})

/* <select>
    <option value="1">Gryffindor</option>
    <option value="2">Ravenclaw</option>
    <option value="3">Hufflepuff</option>
    <option value="4">Slytherin</option>
</select> */