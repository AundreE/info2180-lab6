window.onload = function() {
var mybutton = document.getElementById("search");
mybutton.addEventListener("click", myFunction);
}
//function sends an alert to user that tells the definition of the word definition
function myFunction(){
	var url="request.php?q=definition";
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
       if (this.readyState === 4 && this.status == 200){
    		alert(this.responseText);
        };
    };
	xhttp.open("GET",url, true);
	xhttp.send();
}