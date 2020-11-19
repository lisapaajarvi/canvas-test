window.addEventListener("load", main)

/** @type {HTMLCanvasElement} */
let canvas;

function main() {
    canvas = document.getElementById("canvas")
    setFullscreen();
    addEventListeners();
    draw();
}


function setFullscreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw() {
    
}