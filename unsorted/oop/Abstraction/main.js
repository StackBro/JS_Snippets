class Animal {
    constructor({name, age}) {
        if (this.constructor.name === 'Animal') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }

        this.name = name;
        this.age = age;
    }

    name() {
        return this.name;
    }

    age() {
        return this.age;
    }

    /*
     * Абстрактный метод
    */
    talk() {}
}

class Dog extends Animal {
    talk() {
        console.log('Bark!')
    }
}

const animal = new Animal({
    name: 'Jack',
    age: 5
}); // выбросит ошибку

const dog = new Dog({
    name: 'Jack',
    age: 5
});
dog.talk(); // Bark!