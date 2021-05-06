class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'goes', this.voice);
    }

    allInfo() {
        console.log(this.name);
        console.log(this.voice);
    }
}

class Dog extends Animal {
    constructor(name, voice, breed) {
        super(name, voice);
        this.voice = 'woof';
        this.breed = breed;
    }

    allInfo() {
        console.log(this.name);
        console.log(this.voice);
        console.log(this.breed);
    }
}

const dog = new Dog('Rex', 'woof', 'shepherd');

dog.allInfo();
