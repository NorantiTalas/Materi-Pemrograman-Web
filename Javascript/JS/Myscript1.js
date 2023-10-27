function lampu(sw) {
    let pic;
    if (sw == 1) {
        pic = "image/image/lampuhidup.gif";
    } else if (sw == 2) {
        pic = "image/image/giphy.gif";
    } else {
        pic = "image/image/lampumati.gif";
    }
    document.getElementById("lampImage").src = pic;
}
