import path from "path";

/*why it shows error*/
// console.log(path.join(__dirname))
// console.log(path.join(__filename))

console.log(path.join(process.cwd()))
console.log(path.join(process.cwd(), "india", "bangalore"));