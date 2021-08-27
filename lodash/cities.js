const _ = require('lodash');
const cities = require('./data.json');

const output = _(cities)
    .filter(c => c.population >= 200)
    .countBy(c => c.country)
    .toPairs()
    .map(c => _.zipObject(['country', 'cities'], c))
    .orderBy(c => c.cities, 'desc')
    .take(3)
    .value();

const greaterThan = _.curryRight(_.gte);
const populationGreaterThen = num => _.conforms({population: greaterThan(num)});
const zip = _.curry(_.zipObject);

const output2 = _(cities)
    .filter(populationGreaterThen(200))
    .countBy('country')
    .toPairs()
    .map(zip(['country', 'cities']))
    .orderBy('cities', 'desc')
    .take(3)
    .value();

console.log(output2);