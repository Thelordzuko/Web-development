const images = document.querySelectorAll(".slideshow img");

let index = 0;

function showImage() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";
}
showImage();

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}


let slideShow = setInterval(nextImage, 3000);

const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");

pauseBtn.addEventListener("click", () => {
    clearInterval(slideShow);
    slideShow = null;
});

resumeBtn.addEventListener("click", () => {
    if (!slideShow) {
        slideShow = setInterval(nextImage, 3000);
    }
});
