var dog,sadDog,happyDog;
var foodStock=20, foodObj
var form
var feedStock=0
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
foodObj = new Food()
form = new Form()
}

function draw() {
  background(46,139,87);
  drawSprites();
  form.display()
  foodObj.display()
}

