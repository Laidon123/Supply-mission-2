

class Box{

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
       
        World.add(world, this.body)
        this.width = width
        this.height = height
    }








    display() {
    console.log("hello")    
    fill("red")
      //  translate(this.body.position.x,this.body.position.y)

       // rectMode(CENTER)
        rect(this.body.position.x,this.body. position.y,this.width,this.height)

    }
}


