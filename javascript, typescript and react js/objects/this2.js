class Account {
  accBal = 0 ; 
  minBal = 500;

  depositAmount(amount){
    this.accBal = this.accBal + amount
  }

  getBalance(){
    // console.log(this.accBal - this.minBal)
    return this.accBal -this.minBal
  }

  withdraw(amount){
    return this.accBal - amount
  }
}

let rg = new Account()
rg.depositAmount(15100)
console.log(rg)
let bal1 = rg.getBalance()
console.log(bal1)
let rgWithdraw = rg.withdraw(1000)
console.log(rgWithdraw)

let pg = new Account()
pg.depositAmount(50000)
console.log(pg)
let bal2 = pg.getBalance()
console.log(bal2)
pg.withdraw(1000)
let pgWithdraw = pg.withdraw(1000)
console.log(pgWithdraw)

