/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
let num = 55;
while (num < 85) {
    num++;
    if (num % 5 === 0)
        continue;

    console.log(num);
}