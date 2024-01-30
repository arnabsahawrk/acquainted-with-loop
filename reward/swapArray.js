let array = ["banana", "grape", "guava", "pomegranate", "mango"]
console.log(array);

/* let value = array[4];
array[4] = array[2];
array[2] = value; */

// Destructuring Process
[array[4], array[2]] = [array[2], array[4]];

console.log(array);