class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Tambahkan method greet
  greet() {
    console.log("Halo");
  }
}

const animal = new Animal("Leo", 3);

console.log(`Nama: ${animal.name}`); // Leo
console.log(`Usia: ${animal.age}`); // 3

// Panggil method greet milik instance animal
animal.greet(); // Halo
