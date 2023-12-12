import { Animal } from "./Animal";

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    meow(): string {
        throw new Error("Method not implemented.");
    }
    woof(): string {
        return 'Woof';
    }

}

const dog = new Dog();
dog.name;
dog.woof();

export class Cat extends Animal {
    constructor(data: {age:number, legs: number, name: string}) {
        super(data.age, data.legs, data.name)
    }
    meow(): string {
        super.meow();
        return 'meow';
    }
}
const cat = new Cat({age:10, legs:4, name:'Kitty'});
cat.age;
cat.meow();