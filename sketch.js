let circleX = 50;
let stop = false;
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(243, 237, 247)

	//head
	fill(66, 244, 220)
	if (!stop){
		circleX = circleX + 10;
	}
	if (circleX === 640) {
		circleX = 0;
	}
	ellipse(circleX, 202, 60, 60);

	//eyes
	fill(172, 65, 244)
	ellipse(178, 188, 5, 5);

	fill(172, 65, 2440)
	ellipse(178, 200, 5, 5);

	fill(172, 65, 244)
	ellipse(200, 188, 5, 5);

	fill(172, 65, 2440)
	ellipse(200, 200, 5, 5);

	// :| mouth
	stroke(1);
	fill(242, 111, 220);
	line(178, 216, 198, 216);
}

function mousePressed(){
	console.log(mouseX);
	console.log(mouseY);
	// setup();
	if (stop){
		stop = false;
	}else {
		stop = true;
	}
	fill(172, 65, 244)
	ellipse(mouseX, mouseY, 5, 5);

	fill(172, 65, 2440)
	ellipse(mouseX, mouseY + 10, 5, 5);
}
