class Circle {
    constructor(radius)
    {
        this.radius = radius;
    }

    circumference() 
    {
        let diameter = (this.radius * 2)
        let result = diameter * 3.14159
        console.log(`The circumference of a circle of radius ${this.radius} is ${result}.`)
    }

    area() 
    {
        let result = (3.14159 * Math.pow(this.radius,2))
        console.log(`It's area is ${result}.`)
    }

}


module.exports = Circle;