//Write a function that accepts an array of numbers and returns the sum of all the numbers in the array.

const sumArray=(arr)=>{
    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sumArray([2,4,6,8,10]));


//Write a function that accepts a number and returns true if the number is prime, and false otherwise.
//a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).

const isPrime=(num)=>{
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }

    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(12));

//2nd way
console.log(Math.sqrt(5));
console.log(Math.sqrt(2));
console.log(Math.sqrt(7));
console.log(Math.sqrt(50));
console.log(Math.sqrt(23));
const isPrime2=(num)=>{
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime2(7));
console.log(isPrime2(23));

//function uses a for loop to iterate over every integer from 2 up to the square root of num. The loop starts at 2 because 1 and num are factors of every number and don't need to be checked. It stops at the square root of num because any factor of num greater than its square root must also have a corresponding factor less than the square root, so checking all the numbers up to the square root is sufficient.



//Write a function that accepts a number and returns the factorial of that number.
/**the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1. */


const factorial=(num)=>{
    if(num===1 || num===0){
        return 1
    }
    let fact=num;
    for(let i=num-1;i>=1;i--){
        console.log(fact,'*',i);
        fact=fact*i;
    }
    return fact;
}

console.log(factorial(5));


//function that accepts a number and returns true if the number is a perfect square, and false otherwise.
//4, 9, 16, 25, 36, 49, 64, 
console.log(Math.floor(5));
console.log(Math.sqrt(5));
console.log(Math.floor(Math.sqrt(5)));

/**Math.floor is a method that returns the largest integer less than or equal to a given number. 
 * It takes one argument, which is the number you want to round down to the nearest integer.
 *  For example, Math.floor(3.7) returns 3, while Math.floor(-2.3) returns -3.
 * 
 * Math.sqrt is a method that returns the square root of a given number. 
 * It takes one argument, which is the number you want to find the square root of.
 *  For example, Math.sqrt(25) returns 5, while Math.sqrt(2) returns 1.4142135623730951.
 * 
 *  */

const isSquare=(num)=>{
    let sqrt=Math.sqrt(num);
    console.log('sqrt of'+num+' is '+ sqrt);
    console.log('floor of'+sqrt+' is '+Math.floor(sqrt));
    return sqrt===Math.floor(sqrt);
}

console.log(isSquare(9));
console.log(isSquare(16));
console.log(isSquare(17));
console.log(isSquare(25));


//function that accepts a number and returns an array of all the prime factors of that number.
/**a natural number, other than 1, whose only factors are 1 and itself. The first few prime numbers
 *  are actually 2, 3, 5, 7, 11, and so on */

const primeFactor=(num)=>{
    let factors=[];

    for(let i=2;i<=num;i++){
        while(num%i===0){
            factors.push(i);
            num/=i;
        }
    }

    return factors;
}

console.log(primeFactor(12));
console.log(primeFactor(15));