
var rnd = Math.floor(Math.random() * 6) + 1;

var rndmimage = "dice"+rnd+".png";

var rndimgesource = "images/"+rndmimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", rndimgesource);



var rnd1 = Math.floor(Math.random() * 6) + 1;

var rndmimage1 = "dice"+rnd1+".png";

var rndimgesource1 = "images/"+rndmimage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", rndimgesource1);


if(rnd>rnd1){
  document.querySelector("h1").innerHTML=" player1 won";
}else if (rnd1>rnd){

    document.querySelector("h1").innerHTML=" player2 won";
}else{

    document.querySelector("h1").innerHTML="DRAW !";
}
