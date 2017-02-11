var gridSize=64;
var squareSize=800/gridSize;
var ourColor="blue";
var colorSetting = "";
var isBorder= false;

$(document).ready(function() {
  gridStart();
  swabStart();
});

function gridStart () {

  for (i=0, i<gridSize*gridSize;i++) {
    $("container").append("<div class = 'grid-square'></>")
  }


  $(".grid-square").css("height", squareSize -2)
  $(".grid-square").css("width", squareSize -2)


  if(isBorder) {
    $(".grid-square").css("border-color", "#4286f4");
  }


  $(".grid-square").mouseEnter(function () {


      if (colorSetting ==="random") {
        ourColor = '#' + Math.random().toString(16).substr(2,6);


        $(this).css("opacity","1");

    } elseif (colorSetting ==="fade"){

        ourColor ="black";
          if($(this)).css("opacity") ==="1") {
            $(this).css("opacity","0");

          }
          if($(this)).css("opacity") <0.9) {
            $(this).css("opacity","+=0.1");
          }
    } else {
      $(this).css("opacity", "1");
    }

    $(this).css("background-color" , ourColor);

  });
}
