// class Account {
//   accBal = 0 ; 
//   minBal = 500;

//   depositAmount(amount){
//     this.accBal = this.accBal + amount
//   }

//   getBalance(){
//     // console.log(this.accBal - this.minBal)
//     return this.accBal -this.minBal
//   }

//   withdraw(amount){
//     return this.accBal - amount
//   }
// }


class user{
  currentYear =2024

  calculateAge(year){
    return this.currentYear - year
  }
}

let u1 = new user()
console.log(u1.calculateAge(2000))