/**
 *Constructor function in javaScript
 *Rules:
 * 1.Function name should be pascal
 *a function constructor creates function object . It has issues on security and also less significant
 * most important think is new, new gives us context.
 * In this case this refers to the  newly created objected. example is `new Person("Biswajit", 20);`
 * */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let me = new Person("Biswajit", 20);
let wify = new Person("Priyanka", 17);

function Tea(type) {
    this.type = type;
    this.description = function () {
        // we used this here because we want to refer current object.
        return `This is a cup of ${type} tea`
    };
}

// Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.
Tea.prototype.price = 100
let blackTea = new Tea("black");

function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}

let dog = new Animal("dog");
let cat = new Animal("cat");

// console.log(cat.sound())


function Car() {

}

Car.prototype.color = "Original color"

let car1 = new Car();
let car2 = new Car();
car1.color = "Black";
console.log(car2.color)

console.log(Object.getPrototypeOf(car1).color);


