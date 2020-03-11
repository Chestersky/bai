names = ["Piotr", "Anna", "Michał", "Paulina", "Mateusz", "Magda"];

class Students {
  constructor(names) {
    this.names = names;
  }

  startWith(letter) {
    let arrayWithLetter = this.names.filter(item => {
      return item.charAt(0) == letter;
    });
    return arrayWithLetter;
  }

  sort() {
    return this.names.sort();
  }

  get() {
    return this.names;
  }

  getFirst(n) {
    return this.names.slice(n);
  }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith("P"));
console.log(students.startWith("M").sort());
console.log(students.sort().getFirst(4));
console.log(
  students
    .startWith("M")
    .sort()
    .getFirst(2)
);
console.log(students.get());
