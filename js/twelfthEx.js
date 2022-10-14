let result = 0;

for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        result = j * i;
        console.log(` ${j} * ${i} = ${result}`);
    }
}