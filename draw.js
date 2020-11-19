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

    //drawRectangles(ctx);
    //drawTriangle(ctx);
    //drawCircle(ctx);
    drawSelfPortrait(ctx);

}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function drawSelfPortrait(ctx) {

// face    
ctx.fillStyle = "pink";
ctx.fillRect(400, 200, 240, 240)

ctx.beginPath()
ctx.arc(520, 440, 120, 0, 3.14)    
ctx.closePath();

ctx.fill();

//ctx.fillRect(500, 550, 40, 40)

// eye whites

ctx.fillStyle = "white";
ctx.strokeStyle = "black";

ctx.beginPath()
ctx.arc(465, 370, 30, 3.5, 5.9)
ctx.closePath()

ctx.stroke();
ctx.fill();

ctx.beginPath()
ctx.arc(575, 370, 28, 3.5, 5.9)
ctx.closePath()

ctx.stroke();
ctx.fill();

// pupils

ctx.fillStyle = "black"
ctx.strokeStyle = "teal"
ctx.lineWidth = 10

ctx.beginPath()
ctx.arc(467, 350, 4, 0, 10)
ctx.stroke();
ctx.fill();

ctx.beginPath()
ctx.arc(577, 350, 4, 0, 10)
ctx.stroke();
ctx.fill();

// mouth

ctx.fillStyle = "red"
ctx.strokeStyle = "black"
ctx.lineWidth = 1
ctx.beginPath()
ctx.arc(520, 460, 50, 0.55, 2.6) 
ctx.closePath()
ctx.stroke();
ctx.fill();

// hair

ctx.fillStyle = "rgb(199, 175, 103)"

ctx.fillRect(380, 200, 280, 100)
ctx.fillRect(380, 200, 30, 400)
ctx.fillRect(630, 200, 30, 400)

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

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 */
function drawRectangles(ctx) {
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