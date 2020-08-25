function printReverse(ar) {
    for(let i = ar.length - 1; i >= 0; i--) {
        console.log(ar[i]);
    }
}

function isUniform(ar) {
    for(let i = 0; i < ar.length; i++) {
        if (i !== 0 && ar[i] !== ar[i-1]) {
            return false;
        }
    }
    return true;
}

function sumArray(ar) {
    console.log(ar.reduce((a, b) => a + b, 0))
}

function max(ar) {
    console.log(ar.reduce((a, b) => {return Math.max(a, b)}));
}

function myForEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

Array.prototype.myForEach = function(func) {
    for(let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}