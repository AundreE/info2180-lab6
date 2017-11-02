window.onload = function() {
var mybutton = document.getElementById("search");
mybutton.addEventListener("click", display);
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

//function below allows searching for a word and the definition of the word is printed rather than an alert       
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
//function displays all definitions and XML
function alldisplay(){
var response = new XMLHttpRequest();
var allresult;
response.onreadystatechange = function(){
if (response.readyState== 4 && response.status == 200){
  allresult(response.responseXML);
}
};
response.open("GET", "request.php?q=&all=true", true);
response.send();
}

