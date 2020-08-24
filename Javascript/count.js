let count = -10;

while (count < 20) {
    console.log(count);
    ++count;
}

count = 10;

console.log("");

while (count < 41) {
    console.log(count);
    count += 2;
}

console.log("");

count = 300;

while (count < 334) {
    if(count%2 !== 0) {
        console.log(count);
    }
    ++count;
}

console.log("");

count = 5;

while (count < 51) {
    if(count%5 === 0 && count%3 === 0) {
        console.log(count);
    }
    count += 5;
}