// import using require

const Shape = require("./shape")

// declare class

class Circle{
constructor(){
  this.color = Shape.color;

}
calculateArea(){}


}

let circle = new Circle();



// export class using module.exports
module.exports =circle;