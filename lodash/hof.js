const _ = require('lodash');

function multiple(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

multiple(2, 3) // 6

/** Imperative **/
// function double(num) {
//     return multiple(num, 2)
// }
// console.log(double(3)) // 6

function partial(fn) {
    const fixed = _.tail(_.toArray(arguments))
    return function (...args) {
        return fn.apply(this, _.concat(fixed, arguments))
    };
}

/** Declarative **/
const double = _.partial(multiple, 2);
console.log(double(3)) // 6

const half = _.partial(divide, _, 2);
console.log(half(4)) // 2