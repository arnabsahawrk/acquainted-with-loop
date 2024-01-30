/***

Generate a multiplication table for number 5

 */

let array = [];
let num = 5;
let i = 1;
while (i <= 10) {
    let multiplication = i * num;
    array.push(multiplication);
    i++;
}
console.log(array);