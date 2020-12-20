//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, happyDogImg;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250);
  dog.addImage("dog", dogImg);
  dog.scale(0.5);
  happyDog = createSprite(250, 260);
  happyDog.addImage("happy dog", happyDogImg);
  happyDog.scale(0.5);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
text("Note: Press Up Arrow Key To Feed The Dog Milk!", 250, 100);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
x = 0;
  }
else{
  x = x -1;
}

  database.ref('/')/update({
    Food:x
  })
}

