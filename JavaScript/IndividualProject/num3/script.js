const form = document.getElementById('expenseForm');
const tableBody = document.getElementById('expenseTable');
const totalDisplay = document.getElementById('totalDisplay');
const alertMsg = document.getElementById('alert');
const filter = document.getElementById('filter');
const budgetInput = document.getElementById('budget');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let budget = parseFloat(localStorage.getItem('budget')) || 0;

// Save data
function saveData() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('budget', budget);
}

// Format Naira
function formatNaira(amount) {
    return '₦' + Number(amount).toLocaleString('en-NG', { minimumFractionDigits: 2 });
}

// Calculate total
function calculateTotal(list = expenses) {
    return list.reduce((sum, item) => sum + parseFloat(item.amount), 0);
}

// Render table
function renderTable(filtered = expenses) {
    tableBody.innerHTML = '';

    filtered.forEach((exp, index) => {
        let categoryClass = exp.category.toLowerCase();

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${exp.name}</td>
            <td>${formatNaira(exp.amount)}</td>
            <td class="${categoryClass}">${exp.category}</td>
            <td>${exp.date}</td>
            <td><button class="delete" onclick="deleteExpense(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });

    updateTotal(filtered);
}

// Update total display and budget alert
function updateTotal(filteredList = expenses) {
    const total = calculateTotal(filteredList);
    totalDisplay.textContent = `Total: ${formatNaira(total)}`;

    if (budget && total >= 0.8 * budget) {
        alertMsg.textContent = "⚠️ Warning: You’ve used over 80% of your budget!";
    } else {
        alertMsg.textContent = "";
    }
}

// Add expense
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newExpense = {
        name: document.getElementById('name').value.trim(),
        amount: parseFloat(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        date: document.getElementById('date').value
    };

    expenses.push(newExpense);
    saveData();
    renderTable();
    form.reset();
});

// Delete expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    saveData();
    renderTable();
}

// Filter expenses by category
filter.addEventListener('change', () => {
    const value = filter.value;
    if (value === 'All') {
        renderTable();
    } else {
        const filtered = expenses.filter(exp => exp.category === value);
        renderTable(filtered);
    }
});

// Set budget
budgetInput.addEventListener('change', () => {
    budget = parseFloat(budgetInput.value);
    saveData();
    updateTotal();
});

// Initial load
renderTable();
updateTotal();
