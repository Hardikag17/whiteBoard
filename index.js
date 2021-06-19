//jshint esversion :6
window.addEventListener("load", function () {
  var c = document.getElementById('myCanvas');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  var ctx = c.getContext('2d');

  let painting = false;

  function startPosition(e){
      console.log("mouse down");
      painting = true ; 
      draw(e);
  }

  function endPosition(){
    console.log("mouse up");
      painting = false;
      ctx.beginPath();
  }

  function draw(e) {
      if(!painting){
          return;
      }
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineTo(e.clientX,e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX,e.clientY);
      ctx.stroke();
  }

  document.getElementById("myCanvas").addEventListener("mousedown",startPosition);
  document.getElementById("myCanvas").addEventListener("mouseup",endPosition);
  document.getElementById("myCanvas").addEventListener("mousemove",draw);

});
