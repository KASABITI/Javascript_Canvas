var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(20, 30);
ctx.lineTo(100, 30);
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineTo(100, 60);
ctx.moveTo(100, 60);
ctx.lineTo(20, 60);
ctx.closePath();
// ctx.lineTo(20, 30 );
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();



// ctx.fillStyle ="goldenrod";
// ctx.fillRect(10, 15, 50 ,50 );
