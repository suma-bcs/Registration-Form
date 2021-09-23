var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");                     

function draw(){
    ctx.strokeStyle = "black";                         // border color
    ctx.fillStyle = "#fffc5e";                         // fill color
    circle(380, 250, 80);                              //circle(x,y,radius);


    ctx.fillStyle = "blue";
    rectangle(340,210,20,20);                          // rectangle(x,y,width,height);
    rectangle(400,210,20,20);                          // width=height for square

    ctx.fillStyle = "purple";
    triangle(380,120,-95,50,95,50);                    //triangle(x,y,dist2x,dist2y,dist3x,dist3y)

    ctx.fillStyle = "red";                             // fill color
    circle(380, 280, 20);                        
}

//The function that creates rectangle
function rectangle(x,y,wdth,hght) { 
    ctx.beginPath();                                    // tells canvas that you are about to start drawing
    ctx.rect(x,y,wdth,hght);
    ctx.fill();
    ctx.stroke();
}

//The function that creates circle
function circle(x,y,radius) {               
  ctx.beginPath();
  ctx.arc(x, y, radius,0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
}

//The function that creates triangle
function triangle(x,y,dist2x,dist2y,dist3x,dist3y){     
    ctx.beginPath();
    ctx.moveTo(x,y);                                    // The point from where the path begins
    ctx.lineTo(x+dist2x,y+dist2y);                      // Creates one line to x+dist2x and y+dist2y
    ctx.lineTo(x+dist3x,y+dist3y);                      // Creates second line to x+dist3x and x+dist3y
    ctx.closePath();                                    // Tells the pen to draw a line back to the starting point
    ctx.fill();                                         // fill color
    ctx.stroke();                                       // outline
}

function erase(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}