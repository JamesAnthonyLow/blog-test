var select = function(str){ return document.getElementById(str); }
var addLineNumbers = function(){
  var nBar = select("numbers")

  nBar.innerHTML += '<div id="first-num">0</div>'

  var barHeight = (nBar.offsetHeight / select("first-num").offsetHeight)

  for(var i=1; i<barHeight; i++){
    nBar.innerHTML += "<div>" + i + "</div>"
  }
}
document.addEventListener("DOMContentLoaded", function(event){
  addLineNumbers();
});

