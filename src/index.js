function sqrt(x) {
    if (x < 0) {
        throw new Error("Negative number is not supported");
    }
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 0;
    let right = Math.floor(x / 2);

    while (right - left > 1) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return left;
}

console.log(sqrt(9));  // 3
console.log(sqrt(16)); // 4
console.log(sqrt(25)); // 5
console.log(sqrt(36)); // 6
console.log(sqrt(49)); // 7
console.log(sqrt(64)); // 8
console.log(sqrt(81)); // 9
console.log(sqrt(100)); // 10
