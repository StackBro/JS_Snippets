const obj1 = {
    first: 1,
    second: 2
}

const obj2 = {
    third: 3,
    fourth: 4
}

const res = {...obj1, ...obj2}

console.log(res)