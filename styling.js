function changecolor(){
    // var element = document.querySelectorAll('.color');
  var ccolor = document.getElementById("colorseletd");
  var element, i;
  element = document.querySelectorAll(".color");
  for (i = 0; i < element.length; i++) {
    element[i].className ="color" + " " +ccolor.value;
  }
    
}