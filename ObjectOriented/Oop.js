function Carmodel(company, model, year, start) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.start = function () {
        console.log(`${this.company} created this ${this.model} since ${this.year}, which started its production on ${start}`);
    };
}

let a = new Carmodel("toyta", "v4", 1999, "20/01/2000");

a.__proto__.price = 10000  // this is called prototype chaining.
a.__proto__.discount = 2000


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // constructor is a special type method or function of class, that used for creating and initializing an object instance of that class.
    // in java-script don't need mentioned any function with `function` keyword
    userDetails() {
        return `user details: username: ${this.name}, age: ${this.age}`;
    }
}

let roni = new Person("roni", 20);

// inheritance
class role extends Person {
    constructor(role, name, age) {
        super(name, age);
        this.role = role;
    }

    job() {
        return `${this.name} employee working on ${this.role} at his ${this.age} age`
    }
}

class Vehicle extends Person {

    // if we inherit something from  parent class without create child class constructor, then child class automatically called parents class constructor

    driver() {
        return `${this.name} drives the car`;
    }
}

const l = new Vehicle("roni", 20);

// encapsulation

class BankAccount extends Person {
    #balance = 0;  // balance is private variable. we cannot access it outside the class

    getbalance() {
        console.log(`totalBalance: $ ${this.#balance}`)
    }

    deposite(value) {
        this.#balance += value;
        return this.#balance;
    }
}

// class BankAccount extends Person {
//     balance = 0;
//
//     getbalance() {
//         console.log(`totalBalance: $ ${this.balance}`)
//     }
//
//     deposite(value) {
//         this.balance += value;
//         return this.balance;
//     }
// }
//
// let account = new BankAccount("roni", 20);
// account.getbalance();
// account.deposite(5000);
// account.balance = 14000;
// account.getbalance();

// static
// a class  can called it won method or variable with creating an instance.