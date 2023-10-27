let currentimageindex = 0;

function showimage(index) {
    const mainimage = document.getElementById("main");
    mainimage.src = document.querySelectorAll(".side_view") [index].src;
    currentimageindex = index;
}

function nextimage() {
    currentimageindex = (currentimageindex + 1) % 5; // Assuming 5 images
     showimage(currentimageindex);
}

function previmage() {
    currentimageindex = (currentimageindex - 1 + 5) % 5; // Assuming 5 images
    showImage(currentimageindex);
}

// Adding event listeners for arrow keys
document.addEventListener("keydown", (event)=> {
    if (event.key === "ArrowLeft") {
        previmage();
}else if (event.key === "ArrowRight") {
    nextimage();
}
}); 