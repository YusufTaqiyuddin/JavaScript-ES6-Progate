class Animal{
    constructor(name, age){

        this.name = name;
        this.age = age;
    }
}

const animal = new Animal("Leo", 3);

console.log(`Nama: ${animal.name}`); // Nama: Leo
console.log(`Age: ${animal.age}`); // Age: 3