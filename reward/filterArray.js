let array = [100, 400, 150, 500, 200, 40, 150, 300];
let filterArray = [];

/* for (let i = 0; i < array.length; i++) {
    if (array[i] <= 200) {
        filterArray.push(array[i]);
    }
}
console.log(filterArray); */

filterArray = array.filter(function (value) {
    return value <= 200;
})
console.log(filterArray);