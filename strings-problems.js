//JavaScript function that takes a string as input and returns a new string with the first letter of each word capitalized

capitalizeWords=(str)=>{
    let words=str.split(' ');

    for(let i=0;i<words.length;i++){
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words.join(' ');

}

console.log('world'.slice(1));//output -orld

console.log(capitalizeWords('hello world'));


//function that takes a string as input and returns the reversed string.

function reverseString(str){
    let reverseString='';
    for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i];
    }
    return reverseString;
}

console.log(reverseString('calm down'));

//function that takes a string as input and returns the number of vowels in the string.

vowelCount=(str)=>{
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
    let count=0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(vowelCount('Usb usb Uu hello world'));

//2nd way

function countv(str){
    let vowelCount=0;
    let vowels='aeiouAEIOU';

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(vowelCount('Usb usb Uu hello world'));

//function that takes a string as input and returns a new string where all instances of the word "apple" are replaced with "orange".

replaceApple=(str)=>{
    return str.replace(/apple/g,'orange');
}

console.log(replaceApple('I have an apple,we ate that apple,i like that apple,hwo did you do that to that apple,but it is a orange'));


//Write a function that takes a string as input and returns true if the string is a palindrome- sequence that reads the same backwards as forwards,

pelindrome=(str)=>{
    console.log(str.split(''));
    console.log(str.split('').reverse());

    let reversedStr=str.split('').reverse().join('');
    return str===reversedStr;
}

console.log(pelindrome('racecar'));
console.log(pelindrome('hello'))

//Write a function that takes a string as input and returns the longest word in the string.

longest=(str)=>{
    let words=str.split(' ');
    let longest='';

    for(let i=0;i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i];
        }
    }

    return longest;
}

console.log(longest('The paper cutter is so much beautiful when cutting and tergiversation hopes'))