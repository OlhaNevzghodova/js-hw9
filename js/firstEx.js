let result = '';

for (let number = 10; number <= 20; number++) {
    result += `${number},`;
}
console.log(result.replace(/,\s*$/, ""));