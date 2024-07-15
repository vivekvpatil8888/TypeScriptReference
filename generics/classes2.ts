// THIS DOESNT WORK

interface Greeter {
    greeting: string;
}
class Human implements Greeter {
    public humanFunction() {
        console.log("Executing a human function");
    }
    public greeting: string = "Hello";
}
class Lion implements Greeter {
    public greeting: string = "Grrrrrr";
    public lionAttack() {
        console.log("Attacking like a lion");
    }
}
class Tulip {
    public greeting: string = "...";
    public lookingGood() {
        console.log("Snazzy Flower am I");
    }
}
class LivingSpecies {
    public species: Greeter;

    constructor(species: Greeter) {
        this.species = species;
    }
    public getSpecies() {
        return this.species;
    }
}
const species1 = new LivingSpecies(new Human());
species1.getSpecies().humanFunction();
const species2 = new LivingSpecies(new Lion());
species2.getSpecies().lionAttack();
const species3 = new LivingSpecies(new Tulip());
species3.getSpecies().lookingGood();

// THIS IS SOLVED WITH GENERICS

interface Greeter {
    greeting: string;
}
class Human implements Greeter {
    public humanFunction() {
        console.log("Executing a human function");
    }
    public greeting: string = "Hello";
}
class Lion implements Greeter {
    public greeting: string = "Grrrrrr";
    public lionAttack() {
        console.log("Attacking like a lion");
    }
}
class Tulip {
    public greeting: string = "...";
    public lookingGood() {
        console.log("Snazzy Flower am I");
    }
}
class LivingSpecies<T> {
    public species: T;

    constructor(species: T) {
        this.species = species;
    }
    public getSpecies() {
        return this.species;
    }
}
const species1 = new LivingSpecies(new Human());
species1.getSpecies().humanFunction();
const species2 = new LivingSpecies(new Lion());
species2.getSpecies().lionAttack();
const species3 = new LivingSpecies(new Tulip());
species3.getSpecies().lookingGood();