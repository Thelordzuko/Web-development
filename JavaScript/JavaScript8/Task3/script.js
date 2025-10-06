const textarea = document.getElementById('draft');
const status = document.getElementById('status');

const savedText = localStorage.getItem('autoDraft');
if (savedText) {
    textarea.value = savedText;
}

setInterval(() => {
    const text = textarea.value;
    localStorage.setItem('autoDraft', text);

    const now = new Date();
    const time = now.toLocaleTimeString();
    status.textContent = `Draft saved at ${time}`;
}, 5000);