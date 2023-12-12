import { Animal } from "./Animal";

export class Dog extends Animal {
    woof(): string {
        return 'Woof';
    }

}

const dog = new Dog(2, 4, 'Tobby');
dog.name;
dog.woof();

export class Cat extends Animal {
    meow(): string {
        return 'meow';
    }
}
const cat = new Cat(10, 4, 'Kitty');
cat.age;
cat.meow();