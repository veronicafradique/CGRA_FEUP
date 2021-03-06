/**
 * MyTarget
 * @constructor
 */
function MyTarget(scene,x,y,z) {
	CGFobject.call(this, scene);

	this.x=x;
	this.y=y;
	this.z=z;
	this.sphere = new myLamp(this.scene, 20,10);
	this.pins = new MyCylinder(this.scene, 20, 10);


	//rusty 

	this.rusty = new CGFappearance(this.scene);
	this.rusty.setAmbient(0.3,0.3,0.3,1);
	this.rusty.setDiffuse(0.7,0.7,0.7,1);
	this.rusty.setSpecular(0.5,0.5,0.5,1);	
	this.rusty.setShininess(120);
	this.rusty.loadTexture("../resources/images/rusty.png");


	// metal

	this.metal = new CGFappearance(this.scene);
	this.metal.setAmbient(0.3,0.3,0.3,1);
	this.metal.setDiffuse(0.7,0.7,0.7,1);
	this.metal.setSpecular(0.5,0.5,0.5,1);	
	this.metal.setShininess(120);
	this.metal.loadTexture("../resources/images/metal.png");

};


MyTarget.prototype = Object.create(CGFobject.prototype);
MyTarget.prototype.constructor = MyTarget;

MyTarget.prototype.display = function() {

	this.scene.pushMatrix();

	this.scene.translate(this.x,this.y,this.z);
	//top sphere

	this.rusty.apply();
	this.scene.pushMatrix();
	this.scene.rotate(-90*degToRad,1,0,0);
	this.sphere.display();
	this.scene.popMatrix();

	//down sphere
	this.scene.pushMatrix();
	this.scene.rotate(90*degToRad,1,0,0);
	this.sphere.display();
	this.scene.popMatrix();

	//pins

	this.metal.apply();
	this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();


	this.scene.pushMatrix();
	this.scene.translate(1,0,0);
	this.scene.rotate(90*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0,-1);
	this.scene.rotate(180*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-1,0,0);
	this.scene.rotate(-90*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,-1,0);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();


	this.scene.pushMatrix();
	this.scene.translate(0.6,0.5,0.6);
	this.scene.rotate(-45*degToRad,1,0,0);
	this.scene.rotate(45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();  

	this.scene.pushMatrix();
	this.scene.translate(-0.6,0.5,0.6);
	this.scene.rotate(-45*degToRad,1,0,0);
	this.scene.rotate(-45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0.8,0.5,-0.8);
	this.scene.rotate(45*degToRad,1,0,0);
	this.scene.rotate(-45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.8,0.5,-0.8);
	this.scene.rotate(45*degToRad,1,0,0);
	this.scene.rotate(45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0.6,-0.5,0.6);
	this.scene.rotate(45*degToRad,1,0,0);
	this.scene.rotate(45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.3);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.6,-0.5,0.6);
	this.scene.rotate(45*degToRad,1,0,0);
	this.scene.rotate(-45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.35);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0.8,-0.5,-0.8);
	this.scene.rotate(-45*degToRad,1,0,0);
	this.scene.rotate(-45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.35);
	this.pins.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.8,-0.5,-0.8);
	this.scene.rotate(-45*degToRad,1,0,0);
	this.scene.rotate(45*degToRad,0,1,0);
	this.scene.scale(0.03,0.03,0.35);
	this.pins.display();
	this.scene.popMatrix();  

	this.scene.popMatrix();

};
