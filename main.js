canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.lineWidth = 1;
ctx.rect(190, 143, 350, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(290, 203, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc(350, 203, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(410, 203, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.arc(320, 263, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc(380, 263, 40, 0, 2*Math.PI);
ctx.stroke();