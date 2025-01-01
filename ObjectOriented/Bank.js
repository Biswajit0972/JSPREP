class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount <= 0) {
            console.error(`Deposit amount must be a positive integer.`);
        }
        this._balance += amount;
    }

    deposite(amount) {
        this.balance = amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            return `Amount must be a positive number.`;
        }
        if (amount > this._balance) {
            return `Insufficient balance. Unable to withdraw ${amount}.`;
        }

        this._balance -= amount;
        return `Amount withdrawn successfully. Current balance: ${this._balance}`;
    }
}

const account = new BankAccount(500);
console.log(account.balance);
account.deposite(200);
console.log(account.balance)