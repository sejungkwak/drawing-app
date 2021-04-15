const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const penSize = document.getElementById('width');
const color = document.getElementById('color');
const eraser = document.getElementById('eraser');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var position = { x: 0, y: 0 };

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);
eraser.addEventListener('click', clearCanvas);
minusBtn.addEventListener('click', stepDown);
plusBtn.addEventListener('click', stepUp);

function draw(e) {
  if ( e.buttons !== 1 ) return;

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = penSize.value;
  ctx.strokeStyle = color.value;

  ctx.moveTo(position.x, position.y);
  setPosition(e);
  ctx.lineTo(position.x, position.y);

  ctx.stroke();
}

function setPosition(e) {
  position.x = e.clientX - canvas.offsetLeft;
  position.y = e.clientY - canvas.offsetTop;
}

function clearCanvas() {
  ctx.clearRect(0, 0, 500, 500)
}

function stepDown() {
  penSize.stepDown(1);
}

function stepUp() {
  penSize.stepUp(1);
}