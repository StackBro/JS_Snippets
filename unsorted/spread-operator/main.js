const arr1 = [1, 2, 8];
const arr2 = [4, 5, 6];

const res = Math.max(...arr1, ...arr2);
const shallowCopy = [...arr1, ...arr2];
console.log(shallowCopy)