/**Write a function that takes an array of numbers as input and returns the maximum value using Math.max() */

const findMax=(numbers)=>{
    /**The spread operator (...) is a feature in JavaScript that allows an iterable,
     *  such as an array or a string, to be expanded into individual elements */
    return Math.max(...numbers);

}

console.log(findMax([2,8,3,9,4,1,10,55,0,3]));

/**Write a function that generates a random integer between two given numbers using Math.floor() and Math.random(). */
console.log(Math.random())
console.log(Math.random()+5)//min val
console.log(Math.random()*10)//range
console.log(Math.random()*10+100)

const randomBetween=(max,min)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(randomBetween(1,10));


// function that calculates the square root of a number using Math.sqrt().

const squareRoot=(num)=>{
    return Math.sqrt(num);
}

console.log(squareRoot(10));

//function that calculates the factorial of a number using a loop and Math.multiply().

const factorial=(num)=>{
    let fact=1;

    for(let i=2;i<=num;i++){
        fact=fact*i;
    }

    return fact;
}

console.log(factorial(5));


//Write a function that calculates the area of a triangle given its side lengths using 
//area = 1/2 * base * height
/**In order to find the area of a triangle with 3 sides, we use the Heron's 
 * formula which says if a, b, and c are the three sides of a triangle, then its area is,

Area = √[s(s-a)(s-b)(s-c)]

Here, "s" is the semi-perimeter of the triangle, i.e., s = (a + b + c)/2. */

const triangleArea=(a,b,c)=>{
    const s=(a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

console.log(triangleArea(3,4,5))

const randChar=(name)=>{

    //Note that since the index of a string starts from 0, the +1 inside the Math.floor() function is not necessary and could actually cause the function to return an out-of-bounds index if the length of the string is used.

    return name.charAt(Math.floor(Math.random() * name.length))
}

console.log(randChar('chathura dilshan'));