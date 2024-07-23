class Bank {
  accId = 101;
  accName = "Anuraga"
  accBal = 51000

  openAccount () {
    console.log("Account oppen")
  }
  deposit () {
    console.log("Money Deposited")
  }
  withdraw () {
    console.log("Insufficient balance")
  }
}
let user = new Bank()
console.log(user)

console.log(user.accName)

console.log(user.deposit())