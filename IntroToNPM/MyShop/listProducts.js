let faker = require("faker");

function randomProducts(num) {
    arr = [];
    for(let i = 0; i < num; i++) {
        arr.push((`${faker.commerce.productName()} - \$${faker.finance.amount()}`));
    }
    return arr;
}

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

randomProducts(10).forEach(element => {
    console.log(element);
});