// let array = [1, 2, 3, 4, 5, 5, 7, 7, 8];
let array = ["banana", "grape", "guava", "pomegranate", "mango", "coconut", "jackfruit"]
console.log(array);

for (let i = array.length - 1, j = 0; i >= array.length / 2; i--, j++) {
    // console.log(array[i]);
    let reverse = array[j];
    array[j] = array[i];
    array[i] = reverse;
}
console.log(array);
