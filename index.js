var randomnumber = Math.floor((Math.random()) * 6) + 1;
var image = "images/dice" + randomnumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image);

var randomnumber2 = Math.floor((Math.random()) * 6) + 1;
var image2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

