const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');

const content1 = document.getElementById('cnt1');
const content2 = document.getElementById('cnt2');

button1.onclick = () =>{
    content1.style.display="flex"
    content2.style.display="none"
}

button2.onclick = () =>{
    content1.style.display="none"
    content2.style.display ="flex"
}