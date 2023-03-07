class Person{
    constructor(name,age){
        this._name=name;//private
        this.age=age;//public
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name=name;
    }

    _privateMethid(){
        console.log('this is private method accessed by public method'+this._name);
    }

    publicMethod(){
        this._privateMethid();
    }
}


const person1=new Person('sali',25);
console.log(person1);

person1.age=31;// accessing public property
console.log(person1.name);// accessing public getter method

person1.name='pilip';// accessing public setter method

person1.publicMethod();// accessing public method

person1._name='jane';// accessing private property (should be avoided)
console.log(person1.name);

person1._privateMethid();// accessing private method (should be avoided)