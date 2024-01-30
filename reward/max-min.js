let array = [33, 4, 232, 34, 1, 236, 200];

let max = array[0];
let min = array[0];

for (let i = 0; i < array.length; i++) {
    if (max < array[i])
        max = array[i];

    if (min > array[i])
        min = array[i];
}

console.log(min, max);