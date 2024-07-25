class Account{
  accId ;
  accName;
  accBal;
  // minBal = 500;
  constructor(id, name,amount){
    this.accId = id
    this.accName = name;
    this.accBal = amount
  }
  getBal(){
    return this.accBal - this.minBal
  }
  withdrawl(amount){
    this.accBal = this.accBal - amount
  }
  deposit(amount){
    this.accBal = this.accBal + amount
  }
}

let a1 = new Account(101, "rahul", 500000)
let a2 = new Account(102, "affj", 400000)
console.log(a1)
console.log(a2)


// console.log(a1.getBal())