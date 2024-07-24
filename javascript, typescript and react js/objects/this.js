// this is a pointer which is pointing to current value


class Account {
  accBalance = 0;
  minBalance = 500;

  depositAmount(amount){
    this.accBalance = this.accBalance + amount
    
  }
}

let a = new Account()
console.log(a.accBalance)

a.depositAmount(50)
a.depositAmount(50000)
console.log(a.accBalance)
console.log(a)