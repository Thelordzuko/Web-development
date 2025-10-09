// Select all key elements from the page
const form = document.getElementById('studentForm');
const tableBody = document.getElementById('studentTable');
const search = document.getElementById('search');

// Load existing students from localStorage (or empty array if none)
let students = JSON.parse(localStorage.getItem('students')) || [];

// Function to render all students in the table
function renderTable(filteredStudents = students) {
    tableBody.innerHTML = ''; // clear table before rendering

    filteredStudents.forEach((student, index) => {
        // Calculate average
        const avg = ((student.score1 + student.score2 + student.score3) / 3).toFixed(1);

        // Determine performance category
        let category, cssClass;
        if (avg >= 75) {
            category = 'Excellent';
            cssClass = 'excellent';
        } else if (avg >= 50) {
            category = 'Good';
            cssClass = 'good';
        } else {
            category = 'Needs Help';
            cssClass = 'needs-help';
        }

        // Create a row for each student
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${student.image}" alt="${student.name}"></td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${avg}</td>
            <td class="${cssClass}">${category}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to save students to localStorage
function saveData() {
    localStorage.setItem('students', JSON.stringify(students));
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop page reload

    // Create new student object
    const newStudent = {
        name: document.getElementById('name').value.trim(),
        age: Number(document.getElementById('age').value),
        class: document.getElementById('class').value.trim(),
        image: document.getElementById('image').value.trim(),
        score1: Number(document.getElementById('score1').value),
        score2: Number(document.getElementById('score2').value),
        score3: Number(document.getElementById('score3').value)
    };

    // Add new student to array
    students.push(newStudent);

    // Save to localStorage and re-render
    saveData();   
    renderTable();

    // Reset form
    form.reset();
});

// Search function to filter by name
search.addEventListener('input', () => {
    const term = search.value.toLowerCase();
    const filtered = students.filter(s => s.name.toLowerCase().includes(term));
    renderTable(filtered);
});

// Delete student by index
function deleteStudent(index) {
    students.splice(index, 1); // remove 1 element at position index
    saveData(); // update localStorage
    renderTable(); // refresh table
}

// Initial render when page loads
renderTable();
