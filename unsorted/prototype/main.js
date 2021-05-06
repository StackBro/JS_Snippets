function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function () {
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();
cat.say();
