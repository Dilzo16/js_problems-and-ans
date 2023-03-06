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
