const button1 = document.getElementById('aboutb');
const button2 = document.getElementById('contactsb');
const button3 = document.getElementById('skillsb');

const content1 = document.getElementById('about_cont');
const content2 = document.getElementById('contact_cont');
const content3 = document.getElementById('skills_cont');

button1.onclick = () =>{
    content1.style.display="flex"
    content2.style.display="none"
    content3.style.display="none"
}

button2.onclick = () =>{
    content1.style.display="none"
    content2.style.display="flex"
    content3.style.display="none"
}

button3.onclick = () =>{
    content1.style.display="none"
    content2.style.display="none"
    content3.style.display="flex"
}