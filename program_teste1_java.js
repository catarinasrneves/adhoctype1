// JavaScript Document


//aparecer 4 divs 

$(document).ready(function() {
    $('.box').hide();
    $('.box:lt(4)').show();
});


console.log("hello console");

//pick random letter


function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", 
				"h", "i", "j", "k", "l", "m", "n", "o", 
				"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
	var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

$('.palavra').html(randLetter());


//random font

function randFont(){

var fonts = ['Roboto_Mono', 'Inconsolatas', 'Cousine', 'Anonymous_Pro', 'Open_Sans', 
			'Montserrat', 'Merriweather', 'Play_Fair_Display'];
            
			var rand = fonts[Math.floor(Math.random() * fonts.length)];
            console.log(rand);

            var bodyElement1 = document.getElementById("box1");
			var bodyElement2 = document.getElementById("box2");
			var bodyElement3 = document.getElementById("box3");
			var bodyElement4 = document.getElementById("box4");
			
            bodyElement1.className = fonts[Math.floor(Math.random() * fonts.length)];
			bodyElement2.className = fonts[Math.floor(Math.random() * fonts.length)];
			bodyElement3.className = fonts[Math.floor(Math.random() * fonts.length)];
			bodyElement4.className = fonts[Math.floor(Math.random() * fonts.length)];


}


console.log(randFont());










