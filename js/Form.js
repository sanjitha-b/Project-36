class Form {
constructor(){}

display(){
var feed = createButton("Feed Dog")
feed.position(600,100)
feed.mousePressed(()=>{
dog.addImage(happyDog)
foodStock = foodStock - 1
foodObj.updateStock(foodStock)


}
)
var addFood = createButton("Add Food")
addFood.position(800,100)
addFood.mousePressed(()=>{
foodStock = foodStock + 1
foodObj.updateFeed(foodStock)

}
)
}












}