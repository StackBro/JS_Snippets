const obj = {12859: 1, 12860: 2, 12861: 3};

const keys = Object.keys(obj); // получаем ключи объекта в виде массива

console.log(obj[keys[0]]); // первый элемент

console.log(obj[keys[keys.length - 1]]); //последний элемент