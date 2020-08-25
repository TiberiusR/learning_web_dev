function isEven(x) {
    return x%2===0;
}

function factorial(x) {
    if(x === 1 || x === 0) {
        return 1;
    } else {
        return x*factorial(x-1);
    }
}

function kebabToSnake(x) {
    return x.replace(/-/g, "_");
}