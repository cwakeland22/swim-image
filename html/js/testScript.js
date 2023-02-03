var today = new Date(); 
var hourNow = today.getHours(); 
var greeting; 
var fs = require('fs');
var ims = fs.readdirSync('C:/Users/Clark/SwimLabelPictures/resizedImages')

if (hourNow > 18) { 
    greeting = 'Good evening!'; 
} else if (hourNow > 12) { 
    greeting = ' Good afternoon!'; 
} else if (hourNow > 0) { 
    greeting = 'Good morning!'; 
} else { 
    greeting = 'Welcome!'; 
}
document.write('<h1>' + greeting + '</h1>');


function changeIm() 
{
    document.getElementById("imageId").src="C:/Users/Clark/SwimLabelPictures/resizedImages/_Bama_012221_DK-02.jpg";
}