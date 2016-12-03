var x, y; //Must declare global variables outside of functions if they are to be shared between functions

setup = function(){
	createCanvas(400,400);
	x=0;
	y=0; //ONLY INCLUDED WHEN INTRODUCING Y
}

draw = function(){
	background(100);
	//////////////////////////
	//START OF SMILEY WITH X//
	//////////////////////////
	x += 1;
	
	//face
	fill(200,200,0);
	ellipse(x,200,200);

	//eyes
	fill(0);
	ellipse(x+35,180, 25,50);
	ellipse(x-35,180, 25,50);

	//smile
	noFill();
	strokeWeight(5);
	arc(x,200,150,150,0, PI);

	////////////////////////
	//END OF SMILEY WITH X//
	////////////////////////

	//////////////////////////
	//START OF SMILEY WITH Y//
	//////////////////////////
	y += 1;
	//face
	fill(200,200,0);
	ellipse(x,y,200);

	//eyes
	fill(0);
	ellipse(x+35,y-20, 25,50);
	ellipse(x-35,y-20, 25,50);

	//smile
	noFill();
	strokeWeight(5);
	arc(x,y,150,150,0, PI);

	////////////////////////
	//END OF SMILEY WITH Y//
	////////////////////////

	
}
