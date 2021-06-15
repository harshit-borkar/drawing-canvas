const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decBtn = document.getElementById('decrease');
const incBtn = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size=10;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e)=> {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', ()=> {
    isPressed = false;

    x = undefined;
    y = undefined;
});


canvas.addEventListener('mousemove', (e)=> {

    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
        
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x,y,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

incBtn.addEventListener('click', ()=>{
    size += 2;

    if (size>50){
        size = 50;
    }

    updateSizeOnScreen();
})

decBtn.addEventListener('click', ()=>{
    size -= 2;

    if (size<1){
        size = 1;
    }

    updateSizeOnScreen();
})

function updateSizeOnScreen() {
    sizeEl.innerHTML = size;
}

colorEl.addEventListener('change', (e)=>{
    color = e.target.value;
})

clearEl.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})