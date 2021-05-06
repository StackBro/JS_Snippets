const person = {
    name: {
        first: 'Anatoliy',
        last: 'Kulishov',
    },
    age: 21
}

const personAge = person.age;

const {name: {first: firstName, last: lastName}, age} = person;
const {permissions: {role = 'user'} = {}} = person;

console.log(firstName, lastName, age);