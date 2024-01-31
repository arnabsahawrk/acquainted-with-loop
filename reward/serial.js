let array = [22, 25, 40, 55, 80, 30, 22];
let target = 80;
let count = 0;
while (array.includes(target)) {
    count++;
    if (array[0] === target) {
        break;
    }
    let num = array.shift();
    array.push(num);
}
if (count === 0)
    console.log("The Target Not Founded")
else
    console.log(array);