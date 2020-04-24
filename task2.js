function StairWheel(){
  this.diameter = this.diameter;
  this.setDiameter = function(yourDiameter){
    this.diameter = yourDiameter;
  }
  this.getDiameter = function() {
    return this.diameter;
  }
}

StairWheel.prototype.increaseDiameter = function(value){
  return this.diameter+=value;
}
StairWheel.prototype.decreaseDiameter = function(value){
  return this.diameter-=value;
}

function Wheels(){
  this.size = this.size;
  this.setSize = function(yourSize){
    this.size = yourSize;
  }
  this.getSize = function() {
    return this.size;
  }
}

Wheels.prototype.increaseSize = function(value){
  return this.size+=value;
}
Wheels.prototype.decreaseSize = function(value){
  return this.size-=value;
}

function Body(){
  this.color = this.color;
  this.setColor = function(yourColor){
    this.color = yourColor;
  }
  this.getColor = function() {
    return this.color;
  }
}

function Car(releaseYear){
  this.model = this.model;
  this.releaseYear = releaseYear;
  this.setModel = function(yourModel){
    this.model = yourModel;
  }
  this.getModel = function(){
    return this.model;
  }
  this.body = new Body();
  this.wheels = new Wheels();
  this.stairwheel = new StairWheel();
}
Car.prototype.setDiameter = function(yourDiameter) {
  this.stairwheel.setDiameter(yourDiameter);
};
Car.prototype.getDiameter = function() {
  return this.stairwheel.getDiameter();
};
Car.prototype.increaseDiameter = function (value) {
  this.stairwheel.increaseDiameter(value);
};
Car.prototype.decreaseDiameter = function (value) {
  this.stairwheel.decreaseDiameter(value);
};
Car.prototype.setSize = function (yourSize) {
  this.wheels.setSize(yourSize);
};
Car.prototype.getSize = function () {
  return this.wheels.getSize();
};
Car.prototype.increaseSize = function (value) {
  this.wheels.increaseSize(value);
};
Car.prototype.decreaseSize = function (value) {
  this.wheels.decreaseSize(value);
};
Car.prototype.setColor = function (yourColor) {
  this.body.setColor(yourColor);
};
Car.prototype.getColor = function () {
  return this.body.getColor();
};

var car = new Car(2015);
car.setColor('silver');
car.setSize(42);
car.setModel('Porsche');
car.setDiameter(27);

Car.prototype.Show = function () {
  console.log(car.getModel()+', рік випуску:'+this.releaseYear+', колір кузова:'+car.getColor()+', розмір коліс:'+car.getSize()+', розмір керма:'+car.getDiameter());
};
car.Show();
car.increaseSize(3);
car.Show();
car.decreaseDiameter(4);
car.Show();