

function bolden(){

    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.color = "blue";
    document.getElementById("Text").style.textDecoration="underline"; 

}

function reset(){
    document.getElementById("Text").style.fontWeight = "normal";
    document.getElementById("Text").style.color = "black";
    document.getElementById("Text").style.textDecoration="none";
    document.getElementById("Text").style.fontSize = "12pt";
}

function clickedButton(){
    
    document.getElementById("Text").style.fontSize = "24pt";
}

function clickedSecondButton(){
    var str = document.getElementById("Text").value;
    var parts = str.split(".");
    document.getElementById("Text").value = parts.join("-Moo");
}
