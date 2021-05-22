//Create variables here
var database;
var dog,dodImg,happyDog;

var foodS,foodstock ;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

	createCanvas(500, 500);

  dog = createSprite(250,300,100,100);
  dog.addAnimation("dodImg",dogImg);
  dog.scale = 0.2;

 var foodStock = database.ref('food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeAnimaton(happyDog);
  }

  
}


function draw() {  
  background(46,139,87);

  textSize(20);
  fill("yellow")
  text("NOTE: Press the UP_ARROWKEY to feed the dog",20,50)


 
  drawSprites();
  //add styles here

}
readStock();
writeStock();
function readStock(){

  foodS = data.val();
}
function writeStock(){

if(x<=0){
  x=0
}else{
  x=x-1;
}


  database.ref('/').update({
    Food:x
  })
}


