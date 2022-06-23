class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Halo");
  }

  info() {
    // Panggil method greet
    this.greet(); 

    console.log(`Nama saya adalah ${this.name}`); 
    console.log(`Saya berumur ${this.age} tahun`); 
  }
}

class Dog extends Animal{

}

const animal = new Dog("Leo", 3);

animal.info(); // Nama saya adalah Leo // Saya berumur 3 tahun // Halo
