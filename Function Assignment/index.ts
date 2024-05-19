//                    Function Assignment

// Question No 1: Write a Javascript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(str: string) {
    str = str.toLowerCase();
    let vowelCount = 0;
    for (let char of str) {
        if (['a','e','i','o','u'].includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels("Education is the key to unlocking a world of opportunities and possibilities"));

//                   XXXXXXXXXXXXXXXXXXXXX

// Question No 2: Write a JavaScript function that accepts a number as a parameter and check whether it is prime or not using recursion.

function primeOrNot(num: number, divisior = 2):boolean {
    if (num <= 2) {
        return (num === 2) ? true : false;
    }
    if (num % divisior === 0) {
        return false;
    }
    if (divisior * divisior > num) {
        return true;
    }
    return primeOrNot(num, divisior + 1)
}
let numberToCheck = 19;
const isNumberPrime = primeOrNot(numberToCheck);

if (isNumberPrime) {
    console.log(`${numberToCheck} is Prime!`);

}
else {
    console.log(`${numberToCheck} is not Prime!`);

}

//                        XXXXXXXXXXXXXXXXXXXXX

// Question No 3: Write a JavaScript function to find the first not repeated character.

function firstNotRepeatedCharacter(str: string) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNotRepeatedCharacter("Hello EveryOne"));

//                        XXXXXXXXXXXXXXXXXXXXX

// Question No 4: Write a JavaScript function that returns the square of a number.

function squareNumber(num: number) {
    return num * num;
}
console.log(squareNumber(8));

//                        XXXXXXXXXXXXXXXXXXXXX

// Question No 5: Function `displayMessage()` prints "Hello World" string using console.log() function.

function displayMessage() {
    console.log("Hello World");

}
displayMessage();

//                         XXXXXXXXXXXXXXXXXXXXX