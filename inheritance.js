class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  // Tambahkan method getHumanAge
  getHumanAge(){
    return this.age * 7;
  }
  
}

const dog = new Dog("Leo", 4); 
const humanAge = dog.getHumanAge();
console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`); // humanAge: 28
dog.info(); // Halo // Nama saya adalah Leo // Saya berusia 4 tahun

