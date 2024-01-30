let array = [1, 2, 1, 3, 4, 5];
let array2 = ["banana", "grape", "guava", "pomegranate", "mango", "coconut", "jackfruit"]

let count = 0;
for (let i = 0; i < array.length; i++) {
    const num = 1;
    if (array[i] == num) {
        console.log(i);
        count++;
    }
}
if (count == 0)
    console.log("Not Found");

console.log(array2.indexOf("mango"));