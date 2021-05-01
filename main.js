var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var dragging;

var rad = document.getElementById("rad");
var col = document.getElementById("color");

var radius = rad.value;
var color = col.value;

rad.oninput = function() {
   radius = this.value;
}

col.oninput = function() {
   color = this.value;
}

var drawPoint = function(e) {
   if(dragging) {
      ctx.fillStyle = ctx.strokeStyle = color;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.lineWidth = radius*2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
   }
}

var engage = function() {
   dragging = true;
}

var disengage = function() {
   dragging = false;
   ctx.beginPath();
}

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousedown", drawPoint);
canvas.addEventListener("mousemove", drawPoint);
canvas.addEventListener("mouseup", disengage);

