// Task 1


// Task 2
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    #radius = 0;

    constructor(radius) {
        super();
        this.#radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
}

class Rectangle extends Shape {
    #width;
    #length;

    constructor(width, length) {
        super();
        if (width <= 0 || length <= 0) {
            throw new Error("Width and length must be positive numbers.");
        }
        this.#width = width;
        this.#length = length;
    }

    area() {
        return this.#width * this.#length;
    }
}


let r = new BankAccount();

r.deposite(100)
console.log(r.balance)
