const form = document.getElementById('taskForm');
const tableBody = document.getElementById('taskTable');
const search = document.getElementById('search');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks to localStorage
function saveData() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTable(filteredTasks = tasks) {
    tableBody.innerHTML = '';

    filteredTasks.forEach((task, index) => {
        let cssClass;
        if (task.priority === "High") {
            cssClass = 'high';
        } else if (task.priority === "Medium") {
            cssClass = 'medium';
        } else if (task.priority === "Low") {
            cssClass = 'low';
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.title}</td>
            <td class="${cssClass}">${task.priority}</td>
            <td>${task.status}</td>
            <td>
                <button class="done" onclick="markDone(${index})">Done</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </td>
            <td>${task.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = {
        title: document.getElementById('title').value.trim(),
        priority: document.getElementById('priority').value,
        status: 'Pending',
        date: document.getElementById('date').value.trim(),
    };

    tasks.push(newTask);
    saveData();
    renderTable();
    form.reset();
});

//for filter display
document.getElementById('filter').addEventListener('change', (e) => {
  const filterValue = e.target.value;
  let filtered;
  if (filterValue === 'completed') filtered = tasks.filter(t => t.status === '✅ Done');
  else if (filterValue === 'pending') filtered = tasks.filter(t => t.status === 'Pending');
  else filtered = tasks;
  renderTable(filtered);
});


// to search tasks
search.addEventListener('input', () => {
    const term = search.value.toLowerCase();
    const filtered = tasks.filter(t => t.title.toLowerCase().includes(term));
    renderTable(filtered);
});

// to mark task as done
function markDone(index) {
    tasks[index].status = '✅ Done';
    saveData();
    renderTable();
}

// to elete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveData();
    renderTable();
}

// for the Initial load
renderTable();
