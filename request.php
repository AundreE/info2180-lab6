<!DOCTYPE.html>
<html>
    <head>
        <script type="text/javascript">         
        function display2(){       
        }    
        function display(key){
 
var xhttp = new XMLHttpRequest();
 
xhttp.onreadystatechange = function(){
if (xhttp.readyState== 4 && xhttp.status == 200){
document.getElementById("result").innerHTML = xhttp.responseText;
}
};
 
xhttp.open("GET", "request.php?q=" + key, true);
xhttp.send();
 
}
 </script> 
    </head>   
    <body>
<h1 style="background-color: purple; color: white; padding: 50px;" > Web Dictionary</h1>
<p> Lookup the definition of a word (e.g. ajax, html, bar, php, javascript or css)</p>
<input type="search" id="mySearch" >
<button onclick= display(mySearch.value)> Search </button>
<button> Get All Definitions </button>
<div id = "result"></div> 
</body>





 <input type=button 
value="Search"
onClick="self.location='request.php?q=definition'">