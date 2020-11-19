window.addEventListener("load", main)

/** @type {HTMLCanvasElement} */
let canvas;

function main() {
    canvas = document.getElementById("canvas")
    setFullscreen();
    addEventListeners();
    draw();
}




function draw() {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(100, 100, 20, 20)
    ctx.strokeRect(100, 100, 100, 100)
    ctx.fillRect(180, 180, 20, 20)
    ctx.fillRect(140, 140, 20, 20)

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const width = 300;
    const height = 300;
    const x = centerX - (width / 2);
    const y = centerY - (height / 2);

    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, width, height)

    drawTriangle(ctx);
    drawCircle(ctx);
}
/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function drawTriangle(ctx) {
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "blue"
    ctx.beginPath();
    ctx.moveTo(700, 200)
    ctx.lineTo(700, 300)
    ctx.lineTo(600, 250)
    ctx.closePath();

    ctx.stroke();
    ctx.fill();
}
/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function drawCircle(ctx) {

    ctx.fillStyle = "pink"
    ctx.strokeStyle = "purple"
    ctx.lineWidth = 10

    ctx.beginPath();
    ctx.arc(600, 600, 100, 0, 5)
    ctx.closePath();

    ctx.stroke();
    ctx.fill();
}
function addEventListeners() {
    window.addEventListener("resize", handleWindowResize);
}

function handleWindowResize() {
    setFullscreen();
    draw();
}
function setFullscreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}