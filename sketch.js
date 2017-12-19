function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(243, 237, 247)
	console.log(mouseX);
	console.log(mouseY);

	//head
	fill(66, 244, 220)
	ellipse(188, 202, 60, 60);

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
	fill(242, 111, 220);
	line(178, 216, 198, 216);
}
