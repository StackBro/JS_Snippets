const _ = require('lodash');

const notFlatArray = [1, 2, 3, [4, 5]] // 15

const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum])

console.log(sumFlat(notFlatArray)) // 15