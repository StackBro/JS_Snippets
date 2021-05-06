const arr = ['1', '6', '9', '3', '0'];

const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num % 2)
    .reduce((max, value) => Math.max(max, value), 0)

console.log(res)