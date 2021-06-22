var title;  
var url;
var textCol;
var i = 0;
var j

//click control
$("div").click(function(e){
   var pWidth = $(this).innerWidth(); 
   var pOffset = $(this).offset(); 
   var x = e.pageX - pOffset.left;
   var y = e.pageY
    if(pWidth/3 > x && y > 60) {prev()} 
    else if(pWidth/3 < x && y > 60)
        {next()}
});

//arrow control
window.addEventListener("keyup", function(event) {
  event.preventDefault();
    if (event.keyCode === 39 || event.keyCode === 13) {next()}
    else if (event.keyCode === 37) {prev()}
  });

//setInterval(function(){next()},5000);

function next(){
    if(i<j){i++} 
    else{i=0}
    $.getJSON("home.json", populate)
    }   
       
function prev(){
    if(i>0){i--} 
    else {i=j}
    $.getJSON("home.json", populate)
    }

//about
function about(){ 
    if (document.getElementById("aboutBtn").innerHTML === "About"){
        document.getElementById("aboutBtn").innerHTML = "Hide"
        document.getElementById("about").style.display = "block"
        document.getElementById("aboutBtn").style.color = "white"
            }
    else {
        document.getElementById("aboutBtn").innerHTML = "About"
        document.getElementById("about").style.display = "none"
    }
}

$.getJSON("home.json", populate)
    
function populate(data){
    title = data.home[i].title 
    document.getElementById("words").innerHTML = title;
    url = "url(" + data.home[i].img + ")"
    document.getElementById("bg").style.backgroundImage = url; 
    textCol = data.home[i].capColor
    document.getElementById("bg").style.color = textCol;
    document.getElementById("aboutBtn").style.color = textCol;
    j = (data.home.length) - 1
    }
    