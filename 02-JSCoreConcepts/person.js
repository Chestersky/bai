class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  displayData() {
    console.log(`${this.name}, ${this.surname.toUpperCase()}`);
  }
  displayInitials() {
    console.log(`${this.name.charAt(0)}.${this.surname.charAt(0)}.`);
  }
}

person = new Person("Jan", "Nowak");
me = new Person("Tomasz", "Szkaradek");

person.displayData();
person.displayInitials();
me.displayData();
me.displayInitials();
