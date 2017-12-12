
var sun, orbits, e, m, black; //colors
var x_m, y_m, x_e, y_e; //dimensions of orbits
var earth, mars;
var t;


function setup() {
  // put setup code here
  createCanvas(1000,600);
  background(000);
  angleMode(radians);
}

function draw() {
  // put drawing code here
  //ellipse(centerx, centery, width, height)
  //Draw orbits, planets, and sun
	sun = color('#FFD700');
	orbits = color('#F8F8FF');
	e = color('#0000CD');
	m = color('#800000');
	black = color('#000000');
	stroke(sun);
	fill(sun);
	sun = ellipse(500,300,70,70);
	stroke(orbits);
	noFill();
	a_m = 200; b_m = 100;
	marsorbit = ellipse(500,300,2*a_m,2*b_m);
	a_e = 150; b_e = 75;
	earthorbit = ellipse(500,300,2*a_e,2*b_e);
}
var t = 0;
var z = 0.5;

function mousePressed(){
	/*console.log('t equals '+t);
	console.log('cos of t equals '+cos(t));
	console.log('sin of t equals '+sin(t));*/
	dt = -PI/10;
	dz = -PI/10;
	stroke(m);
	fill(m);
	mars = ellipse(500-a_m*cos(z),300-b_m*sin(z),20,20);
	stroke(e);
	fill(e);
	earth = ellipse(500-a_e*cos(t),300-b_e*sin(t),20,20);
	stroke(orbits);
	fill(orbits);
	line(500-a_e*cos(t),300-b_e*sin(t),500-a_m*cos(z),300-b_m*sin(z));
	t=t+dt;
	z=z+dz;
}