class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getDetails(){
        return `${this.name} is ${this.age} years old!`
    }


}

class Employee extends Person{
    constructor(name,age,salary,designation){
        super(name,age);
        this.salary=salary;
        this.designation=designation;
    }

    getDetails(){
        return `${this.name} is a ${this.designation} who earns ${this.salary} for year`;
    }

    raiseSalary(percentage){
        this.salary*=(1+percentage/100);
    }
}

const person1 = new Person('John', 30);
console.log(person1.getDetails()); // Output: "John is 30 years old."

const employee1 = new Employee('Jane', 25, 50000, 'Software Developer');
console.log(employee1.getDetails()); // Output: "Jane is a Software Developer earning $50000 per year."
employee1.raiseSalary(10);
console.log(employee1.getDetails()); // Output: "Jane is a Software Developer earning $55000 per year."
