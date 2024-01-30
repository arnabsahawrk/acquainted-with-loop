/***

Generate a multiplication table for number 9

 */

let array = [];
let num = 9;

for (let i = 1; i <= 10; i++) {
    let multiplication = i * num;
    array.push(multiplication);
}
console.log(array);