let result = 0;

for (let number = 30; number <= 80; number++) {
    if (number % 2 === 0) {
        result += number;
    }
}
console.log(result);