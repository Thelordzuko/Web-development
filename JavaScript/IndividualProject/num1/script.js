
const form = document.getElementById('Form');
const tableBody = document.getElementById('studentTable');
const search = document.getElementById('search');

let students = JSON.parse(localStorage.getItem('students')) || [];

// this is to save students to localStorage
function saveData() {
    localStorage.setItem('students', JSON.stringify(students));
}

// this is to Render the table
function renderTable(filteredStudents = students) {
    tableBody.innerHTML = '';

    filteredStudents.forEach((student, index) => {
        const avg = ((student.score1 + student.score2 + student.score3) / 3).toFixed(1);

        let category, cssClass;
        if (avg >= 75) {
            category = 'Excellent';
            cssClass = 'excellent';
        } else if (avg >= 50) {
            category = 'Good';
            cssClass = 'good';
        } else {
            category = 'Needs Help';
            cssClass = 'help';
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${student.image}" alt="${student.name}"></td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${avg}</td>
            <td class="${cssClass}">${category}</td>
            <td><button class="delete" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// this handles form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newStudent = {
        name: document.getElementById('name').value.trim(),
        age: Number(document.getElementById('age').value),
        class: document.getElementById('class').value.trim(),
        image: document.getElementById('image').value.trim(),
        score1: Number(document.getElementById('score1').value),
        score2: Number(document.getElementById('score2').value),
        score3: Number(document.getElementById('score3').value)
    };

    students.push(newStudent);
    saveData();
    renderTable();
    form.reset();
});

// for the search input
search.addEventListener('input', () => {
    const term = search.value.toLowerCase();
    const filtered = students.filter(s => s.name.toLowerCase().includes(term));
    renderTable(filtered);
});

// Delete a student by index
function deleteStudent(index) {
    students.splice(index, 1);
    saveData();
    renderTable();
}

//to load first
renderTable();
