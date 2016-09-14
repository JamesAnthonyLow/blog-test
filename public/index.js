var select = function( str ){ return document.getElementById( str ); }

var fontHeight = function(){
  var div = document.createElement( "div" );
  div.className = "code-font";
  div.innerHTML += "0";
  var body = document.getElementsByTagName( "body" )[0];
  body.appendChild( div );
  offset = div.offsetHeight;
  body.removeChild( div );
  return offset;
}

var getBarHeight = function(){
  return select( "code-body" ).offsetHeight / fontHeight();
}

var addLineNumbers = function(){
  for(var i=0; i<getBarHeight(); i++)
  select( "numbers" ).innerHTML += 
    "<div id=\"box-"+i+"\" class=\"num\">"+i+"</div>";
}

var colorNumber = function( ev ){
  var num = Math.floor( ev.clientY/fontHeight() );
  var all_nums = document.getElementsByClassName( "num" );
  if( num <= getBarHeight() ){
    for(var i=0; i<all_nums.length; i++){
      all_nums[i].innerHTML = Math.abs( i-num );
    }
    var line = select( "box-"+String( num ) );
  }
}

var toggleTitle = function( board, titleSpan ){
  var board = select( board );
  var titleSpan = select( titleSpan );
  board.onmouseenter = function(){
    titleSpan.classList.remove( "hidden" );
  }
  board.onmouseleave = function(){
    titleSpan.classList.add( "hidden" );
  }
}

document.addEventListener( "DOMContentLoaded", function( event ){
  document.onmousemove = colorNumber; 

  toggleTitle( "posts", "post-title" );
  toggleTitle( "social", "social-title" );

  addLineNumbers();
});

