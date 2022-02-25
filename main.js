canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
	alphabetkey();
	document.getElementById("d1").innerHTML="You pressed Alphabet key";
	console.log("Alphabet key");
    }
	else if(keyPressed >=48 && keyPressed<=57)
	 { numberkey();
	 document.getElementById("d1").innerHTML="You pressed Number Key";
	 console.log("Number key");
    }
  else if((keyPressed >=37 && keyPressed<=40))
	{
	arrowkey();
	document.getElementById("d1").innerHTML="You pressed Arrow key";
	console.log("Arrow key");
    }
	else if((keyPressed >=17) || (keyPressed >=18 )) ((keyPressed >=27))
	{
	specialkey();
	document.getElementById("d1").innerHTML="You pressed Special key";
	console.log("Special key");
	}

	{ 
	otherkey();
 document.getElementById("d1").innerHTML="You pressed symbol or other key"; 
console.log("Other key");
}
}
 
function aplhabetkey()
{
	img_image="Alphabetkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
