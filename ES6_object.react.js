//insert constructor object and method inside of script tags if using inside of an index.html file

//create  a new object via constructor - class is a keyword and properties are assigned inside of the constructor//

class Car {
  constructor(name) {
    this.brand = name;
  }
}
//
mycar = new Car("Ford");

document.write(mycar.brand);
