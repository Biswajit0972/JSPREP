// In javaScript almost everywhere we can see prototype properties

let computer = {cpu: 12}
let apple = {screen: "HD"}

// __ is called as dander
// we can access prototype __proto__

let myOwnCustomComputer = {
    price: 1000,
    __proto__: apple,
}
let cpu =
    {
        speed: 10000,
        __proto__: myOwnCustomComputer
    }
console.log("jell", cpu.__proto__.screen)
