//SELECT THE ELEMENTS WE ARE INTERESTED IN, CACHE THEM IN VARs

//set variable for our output to user
var css = document.querySelector("h3");


//set variables the two color choices of the user
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

//set variable for our body (to apply a background)
var body = document.getElementById("gradient");

var button = document.querySelector("button");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");




//create a function that takes the two color choices and turns it into CSS linear gradient and applies to background
function setGradient(){
	body.style.background = "linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";	

	//tell the user the CSS Gradient for their color choices in the h3
	//maybe it's easily copiable
	 css.textContent = body.style.background + ";";
}

function randomColors(){
	//create a random hex value
	const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
		var ranCol1 = genRanHex(6);
		ranCol1 = "#" + ranCol1;
		console.log(ranCol1);

		const genRanHex2 = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
		var ranCol2 = genRanHex(6);
		ranCol2 = "#" + ranCol2;
		console.log(ranCol1);

		console.log(ranCol2);

		body.style.background = "linear-gradient(to right, "
	 + ranCol1 
	 + ", " 
	 + ranCol2 
	 + ")";	

	 input1.value = ranCol1;
	 input2.value = ranCol2;

	//tell the user the CSS Gradient for their color choices in the h3
	//maybe it's easily copiable
	 css.textContent = body.style.background + ";";
}

//get the two color choices of the user, and trigger the setGradient function

//oninput in HTML would also work rather than addEventListener, but it's best to keep everythign in the JS
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.addEventListener("load", setGradient());

button.addEventListener("click", randomColors);




