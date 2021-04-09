class Polygon {
	constructor(name, height, width) {
		this.name = name;
		this.height = height;
		this.width = width;
		// this.area = height * width
	}
	get area() {
		return this.width * this.height;
	}
	sayName() {
		console.log("Hi, I am a " + this.name);
	}
}

let p = new Polygon("Polygon", 300, 400);
p.sayName();
console.log("The area of this polygon is " + p.area);

class Rectangle extends Polygon {
	constructor(height, width) {
		super("Rectangle", height, width);
		this.sides = 4;
		this.width = height;
		this.height = width;
	}

	sayName() {
		console.log("Hi I am a polygon and my name is " + this.name + ".");
	}
}

let r = new Rectangle(50, 60);
r.sayName();
r.area = 3;
console.log("The area of this polygon is " + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon {
	constructor(height, width) {
		super("Triangle", height, width);
		this.sides = 3;
		this.width = height;
		this.height = width;
	}
	get area() {
		return (this.height * this.width) / 2;
	}
}

let t = new Triangle(50, 60);
t.sayName();
console.log("The area of this polygon is " + t.area);

class Circle extends Polygon {
	constructor(radius) {
		super("Circle");
		this.radius = radius;
	}
	get area() {
		return Math.pow(this.radius, 2) * Math.PI;
	}
}
let c = new Circle(50);
c.sayName();
console.log("The area of this polygon is " + c.area);
