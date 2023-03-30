//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius){
    this.radius = radius
    
}
dia(){
    console.log(this.radius+ this.radius)
}
area(){
    console.log(this.radius*this.radius*3.142)
}
circumference(){
    console.log(2*3.142*this.radius)
}
}
a1 = new Circle(2)
a1.dia()
a1.area()
a1.circumference()
