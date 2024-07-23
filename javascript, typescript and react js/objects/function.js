class Account {
  openAccount () {
    console.log("Account oppen")
  }
  deposit () {
    console.log("Money Deposited")
  }
  withdraw () {
    console.log("Insufficient balance")
  }
  getBalance () {
    console.log(" balance")
  }
  closeAccount () {
    console.log("Account closed")
  }
}

let user = new Account()

console.log(user)
console.log(user.openAccount())
console.log(user.deposit())
console.log(user.withdraw())
console.log(user.getBalance())
console.log(user.closeAccount())