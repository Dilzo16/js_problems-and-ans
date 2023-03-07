class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayhello(){
        console.log(`Hello everyone,my name is ${this.name} and im ${this.age} years old!`);
    }
}


const person1=new Person('lili',30);
const person2=new Person('sali',25);


person1.sayhello();

person2.sayhello();