import { createStudent } from "./rest-api-client.js";

const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const house = document.querySelector("#house").value;
    const gender = document.querySelector("#gender").value;
    const year = document.querySelector("#year").value;

    const student = {
        firstName,
        lastName,
        gender,
        house,
        year,
    };

    const studentId = await createStudent(student);

    location.href = `detail.html?id=${studentId}`;
};

document.querySelector("#create-form").addEventListener("submit", (event) => {
    handleSubmit(event);
})