//**Polymorphism is one of the core concepts of object-oriented programming (OOP), 
// which allows objects to take on many different forms. There are two types of polymorphism:
//  method overloading and method overriding.

// Method overloading is when a class has multiple methods with the same name but different
//  parameters. The method that is executed depends on the number and type of arguments passed to it. 
//  In JavaScript, we don't have method overloading in the traditional sense because the language 
//  doesn't support multiple method definitions with the same name. However, we can achieve similar 
//  functionality by using default parameter values or the arguments object.

// Here's an example of method overloading in JavaScript using default parameter values: */

class Calculator {
    add(x, y = 0) {
      return x + y;
    }
  
    add(x, y, z) {
      return x + y + z;
    }
  }
  
  const calculator = new Calculator();
  console.log(calculator.add(2, 3)); // Output: 5
  console.log(calculator.add(2, 3, 4)); // Output: 9
  
//   In this example, we have a Calculator class with two add methods. 
//   The first method takes two parameters, x and y, with a default value of 0 for y. 
//   The second method takes three parameters, x, y, and z. Depending on the number of arguments
//    passed to the add method, the appropriate method will be executed.

// Method overriding is when a subclass provides its own implementation of a method that
//  is already defined in its superclass. The subclass method must have the same name, return type,
//   and parameters as the superclass method. When an object of the subclass is created, 
//   the subclass method will be called instead of the superclass method.

// Here's an example of method overriding in JavaScript:

class Animal {
    makeSound() {
      console.log('Animal makes a sound');
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log('Meow');
    }
  }
  
  const animal = new Animal();
  const cat = new Cat();
  
  animal.makeSound(); // Output: "Animal makes a sound"
  cat.makeSound(); // Output: "Meow"
  