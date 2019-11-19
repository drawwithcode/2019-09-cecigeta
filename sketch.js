var myImage;
var myImage2;
var patatine = [];
var totali = 10;
var pacchetto;
var value = 0;

function preload() {
  // put preload code here
  myImage = loadImage("./Risorsa 1.png")
  myImage2 = loadImage("./Risorsa 2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  // put setup code here
  pacchetto = new Ball();
  setShakeThreshold(20);

  for (var i = 0; i < totali; i++) {
    var myPatatine = new Patate();
    patatine.push(myPatatine);
  }

}

function draw() {

  clear();
  //background('white');
  imageMode(CENTER);

  pacchetto.display();

  if (touches.length != 0) {

    for (var i = 0; i < patatine.length; i++) {
      var b = patatine[i];
      b.move();
      b.display();
    }

  } else if (touches.length == 0) {



  }

  text('Shake to move the pack,', width / 2, 30);
  textAlign(CENTER);
  textFont("Racing Sans One");
  textSize(25);

  text('touch to make the chips rain!', width / 2, 50);
  textAlign(CENTER);
  textFont("Racing Sans One");
  textSize(25);

}

function touchMoved() {
  return false;
}

function Ball() {

  this.x = width / 2;
  this.y = height / 2;
  this.xspeed = 0;
  this.yspeed = 0;

  var xIncrease = 1;
  var yIncrease = 1;

  this.move = function() {
    this.x += (this.xspeed + value) * xIncrease;
    this.y += (this.yspeed + value) * yIncrease;

    if (this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }

    if (this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }

  }

  this.display = function() {
    image(myImage, this.x, this.y, myImage.width / 2, myImage.height / 2);
  }

}

function deviceShaken() {
  value = value + 2;
  pacchetto.move();
}

function Patate() {

  this.x = random() * width;
  this.y = (random() * height) - 50;
  this.yspeed = 5;

  var yIncrease = 1;

  this.move = function() {

    this.y += this.yspeed * yIncrease;

    if (this.y > windowHeight || this.y < 0) {
      this.y = (random() * height) - 50;
    }

  }

  this.display = function() {
    image(myImage2, this.x, this.y, myImage2.width / 2, myImage2.height / 2);
  }

}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
