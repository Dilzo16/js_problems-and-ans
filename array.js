//Given an array of numbers, return a new array containing only the even numbers.

const numbers=[1,2,3,4,5,6];

const evenNumbers=[];

numbers.forEach((number)=>{
    if(number%2===0){
        evenNumbers.push(number)
    }
});

const evenNumbers2=numbers.filter((num)=>num%2===0);

console.log(evenNumbers2);

console.log(evenNumbers);

//Given an array of strings, return a new array containing only the strings with length greater than 5.

const strings=['apple','banana','hakunamatana','siri','sick','lemon','vivobook'];

const longString=strings.filter((string)=>string.length>5);

console.log(longString);

//Given an array of objects representing people, return a new array containing only their ages.
const people=[{name:'john',age:21},{name:'supipi',age:35},{name:'lal',age:41}];

const ages=people.map((person)=>person.age);
console.log(ages);

const ages2=people.filter((person)=>person.age>25);

console.log(ages2);


//Given an array of numbers, return the sum of all even numbers.
const numbers1=[1,2,3,4,5,6];

const sumOfEvenNumbers=numbers1.reduce((sum,number)=>{
    if(number%2===0){
        return sum+number;
    }
    return sum;
},0);

console.log(sumOfEvenNumbers);

//Given an array of strings, capitalize the first letter of each string and return a new array.
const strings1=['apple','banana','hakunamatana','siri','sick','lemon','vivobook'];

const capitalize=strings1.map((string)=>string.charAt(0).toUpperCase()+string.slice(1));

console.log(capitalize);

//Given an array of numbers, return the index of the first occurrence of a specific number.

const num=[1,2,3,4,3,3,5,6,5,7];

const target=5;

const index=num.findIndex((number)=>number===target);

console.log(index);

//Given an array of strings, return a new array containing only the strings that contain a specific substring.
const strings2=['apple','banana','hakunamatana','siri','sick','lemon','vivobook'];

const subString='na';

const filteredStr=strings2.filter((string)=>string.includes(subString));

console.log(filteredStr);