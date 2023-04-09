let red, green, blue;

const setColor = () => {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")";
    info.textContent = "COLOR : rgb(" + red + ", " + green + ", " + blue + ")";
};

setInterval(() => {
   setColor();
}, 1500);