class Account {
  openAccount() {
    console.log("Account oppen");
  }
  deposit() {
    console.log("Money Deposited");
  }
  withdraw() {
    console.log("Insufficient balance");
  }
  getBalance() {
    return 10000000;
  }
  closeAccount() {
    console.log("Account closed");
  }
}

let user = new Account();

user.openAccount();
user.deposit();
console.log(user.getBalance())