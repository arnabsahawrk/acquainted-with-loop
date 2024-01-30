let array = [2, 1, 3, 4, 5, 2, 2, 4, 5, 5, 5, 5, 5, 5, 9, 10];
let freQuency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < array.length; i++) {
    let value = array[i];
    freQuency[value - 1]++;
}
let maxOccur = freQuency[0];
for (let i = 0; i < freQuency.length; i++) {
    if (maxOccur < freQuency[i]) {
        maxOccur = freQuency[i];
    }
}
let maxOcc = freQuency.indexOf(maxOccur);
console.log(freQuency);
console.log("Max Occurrence: ", maxOcc + 1);
console.log("Occurrence number:", maxOccur, "times")