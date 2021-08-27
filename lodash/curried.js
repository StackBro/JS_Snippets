const _ = require('lodash');

function divide(a, b) {
    return a / b
}

const curriedDivide = _.curry(divide)
console.log(curriedDivide(10)(2))