let array = [100, 200, 50, 800, 400, 900, 400, 150];
console.log(array);
let discountedArray = [];

/* for (let i = 0; i < array.length; i++) {
    if (array[i] <= 200) {
        let percent20 = array[i] - array[i] * 20 / 100;
        discountedArray.push(percent20);
    }
    else {
        let percent50 = array[i] - array[i] * 50 / 100;
        discountedArray.push(percent50);
    }
}

console.log(discountedArray); */

discountedArray = array.map(function (value) {
    if (value <= 200) {
        let percent20 = value - value * 20 / 100;
        return percent20;
    }
    else {
        let percent50 = value - value * 50 / 100;
        return percent50;
    }
})

console.log(discountedArray);
