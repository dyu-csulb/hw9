let amount  = 0;
class Account {
    constructor(name)
    {
        this.name = name;
    }

    credit(amt) 
    {
        amount = amt;
    }

    describe() 
    {
        console.log(`owner: ${this.name}, balance: $${amount}.`)
    }
}


module.exports = Account;    