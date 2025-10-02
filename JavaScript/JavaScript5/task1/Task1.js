let text = document.getElementById("sample")
let button1 = document.getElementById("btn")

button1.onclick =()=> {
    changeColor();
}
function changeColor(){
   text.style.color = "green"; 
   text.style.display = "flex";
}