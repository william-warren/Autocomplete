const studentNameInput = document.querySelector("#student-name");
const studentNamesList = document.querySelector("#student-names");

studentNameInput.addEventListener("input", () => {
    const url = `/api/students?q=${studentNameInput.value}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const options = [];
            for (const name of data.students) {
                options.push(`<option value="${name}">`);
            }
            studentNamesList.innerHTML = options.join("");
        });
});