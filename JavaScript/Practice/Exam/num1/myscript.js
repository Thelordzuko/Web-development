// Selecting key elements from page
let form = document.getElementById('studentForm')
const tableBody = document.getElementById('studentTable')
const search = document.getElementById('search')

//load existing students from local storage or empty array if none
let students = JSON.parse(localStorage.getItem('students')) || []

// function to render all students in the table
function renderTable(filteredStudents = students){
    tableBody.innerHTML = ''; //clears table before rendering

    filteredStudents.foreach((student, index) => {
        //calculate average
        avg = ((student.score1 + student.score2 + student.score3) / 3).toFixed(1)

        let category, cssClass;
        if (avg >= 75){
            category ='Excellent';
            cssClass = 'excellent'
        } if (avg >= 50){
            category = 'Good';
            cssClass = 'good';
        }else {
            category='Needs help';
            cssClass='needs-help';
        }

        //creating a row for each student
        const row = document.createElement('tr')
        row.innerHTML = `
        <td><img src="${student.picture}"></td>
        <td>${student.name}"></td>
        <td>${student.class}</td>
        <td>${avg}</td>
        <td class="cssClass">${category}</td>
        <td><button class="delete-btn" onclick="deleteStudent(${index})"></button></td>       
        `;
        tableBody.appendChild(row);
    });
}

//function to save students to local storage
function saveData () {
    localStorage.setItem('students', JSON.stringify(students));
}

//handle form submission