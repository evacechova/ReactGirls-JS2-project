export const fetchStudents = async () => {
	const response = await fetch("http://localhost:8080/students");
	return response.json();
};

export const fetchStudent = async (id) => {
	const response = await fetch(`http://localhost:8080/students/${id}`);
	return response.json();
};

export const updateStudent = async (id, student) => {
	await fetch(`http://localhost:8080/students/${id}`, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(student),
	});
};

export const createStudent = async (student) => {
    const response = await fetch(`http://localhost:8080/students`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(student),
	});
    const studentId = await response.json()
    return studentId;
};

export const deleteStudent = async (studentId) => {
	await fetch(`http://localhost:8080/students/${studentId}`, {
		method: "DELETE",
	});
};