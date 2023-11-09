/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    n == 10
    return function () {
        n
        return n++
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

 