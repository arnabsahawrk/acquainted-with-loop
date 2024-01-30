let array = [22, 25, 40, 55, 80, 30, 22];
let target = 80;

while (true) {
    if (array[0] === target) {
        break;
    }
    let num = array.shift();
    array.push(num);
}

console.log(array);