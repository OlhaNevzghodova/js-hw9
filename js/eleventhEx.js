let number = 90;
let result = 0;

for (let divider = 1; divider <= number; divider++) {
    if (number % divider === 0 && divider % 2 === 0) {
        result += divider;
    }
}

console.log(result);
