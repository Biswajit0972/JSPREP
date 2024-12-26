const sayHello = (name) => {
    return `Hello World!, ${name}!`
}

const warpper = (fn) => {
    return (hello) => {
        return fn(hello);
    };
}

let a = warpper(sayHello, 'Biswajit');

function stringTONumber(number) {
    if (!number || number.trim() === '') {

        return "Not a number";
    }
    const convertedNumber = Number(number);
    if (isNaN(convertedNumber)) {
        return "Not a number";
    }
    return convertedNumber;
}

function filterNumbers(arr) {
    if (!arr || arr.length === 0) {
        return arr;
    }

    let res = arr.filter((value) => !isNaN(value));
    return res;
}

// console.log(filterNumbers(arr))

function findMax(arr) {
    if (!arr || arr.length === 0) {
        return arr;
    }
    let max = -1;
    arr.map((value) => {
        if (max <= value) {
            max = value;
        }
    })

    return max;
}

function removeDuplicates(arr) {

}


const squareNumbers = (arr) => (
    arr.map((value) => value * value)

);

const filterEvenNumbers = (arr) => (
    arr.filter((value) => value % 2 === 0)
);
const sumPositiveNumbers = (arr) => (
    arr.filter((value) => value > 0).reduce((a, b) => a + b, 0)
);

const getNames = (arr) => (
    arr.map((item) => item.name));

let arr = [{name: "Roni", age: 19}, {name: "Biswajit", age: 20}]; // output 9

const person = {};

function outer() {
    return () => {
        return "Inner function called"
    }
}

// task 1
person.name = "Hitesh";
person.age = 19.5;
person.introduce = function () {
    return `Hi, My name is ${this.name} and I am ${this.age} years old.`
}

const aa = outer();
console.log(aa);
