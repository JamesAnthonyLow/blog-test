var select = function(str){ return document.getElementById(str); }

var addLineNumbers = function(){
  var nBar = select("numbers")

  nBar.innerHTML += '<div id="first-num">0</div>'

  var barHeight = (nBar.offsetHeight / select("first-num").offsetHeight)

  for(var i=1; i<barHeight; i++){
    nBar.innerHTML += "<div>" + i + "</div>"
  }
}

var addBlogEntries = function(){
  var header = ['<pre><code class="code-font">    #!/MyBlog/By JamesAnthonyLow',
    '     ',
    '    {'];

    var t  = ['     "Linked Lists" : "Monday, September 12, 2016",',
      '     "Trees" :  "Tuesday, September 13, 2016"',];

      var footer = ['    }',
        '     ',
        '    {',
        '     "Twitter": @JamesAnthonyLow,',
        '    }',
        '</code></pre>'];

        select("code-body").innerHTML = entries;
}
document.addEventListener("DOMContentLoaded", function(event){
  addBlogEntries();
  addLineNumbers();
});

