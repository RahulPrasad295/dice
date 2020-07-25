
var randomnumber = Math.floor(Math.random()*6)+1;

var randomdiceimg = "images/dice" + randomnumber+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceimg);


var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdiceimg1 = "images/dice" + randomnumber1 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomdiceimg1);



if(randomnumber < randomnumber1){
    document.querySelector("h1").innerHTML = "!!Dice 2🚩";
}else if(randomnumber > randomnumber1){
    document.querySelector("h1").innerHTML = "🚩Dice 1!!";
}else{
    
    document.querySelector("h1").innerHTML = "!!Draw!!";
}