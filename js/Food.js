class Food {

constructor(){

this.image = loadImage("Images/Milk.png")
}
readStock(){
var stockRef = database.ref("Food")
stockref.on("value", function(data){
    foodStock = data.val()

})

}
display(){
var x = 80, 
y= 100
imageMode(CENTER)
image(this.image, 720,200,60,60)
if(foodStock!= 0){
for(var i=0;i<foodStock; i++){
if(i%10 == 0){

    x = 80
    y=y+50

}
image(this.image, x,y,50,50)
x = x+30

}


}

}

updateStock(food){
database.ref("/").update({
Food : food

})

}
readFeed(){
    var feedRef = database.ref("Feed")
    feedRef.on("value", function(data){
        feedStock = data.val()
    
    })
    
    }
    updateFeed(feed){
        database.ref("/").update({
        Feed : feed
        
        })
        
        }
}