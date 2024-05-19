//                    Function Assignment
// Question No 1: Write a Javascript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(str) {
    str = str.toLowerCase();
    var vowelCount = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels("Education is the key to unlocking a world of opportunities and possibilities"));
//                   XXXXXXXXXXXXXXXXXXXXX
// Question No 2: Write a JavaScript function that accepts a number as a parameter and check whether it is prime or not using recursion.
function primeOrNot(num, divisior) {
    if (divisior === void 0) { divisior = 2; }
    if (num <= 2) {
        return (num === 2) ? true : false;
    }
    if (num % divisior === 0) {
        return false;
    }
    if (divisior * divisior > num) {
        return true;
    }
    return primeOrNot(num, divisior + 1);
}
var numberToCheck = 19;
var isNumberPrime = primeOrNot(numberToCheck);
if (isNumberPrime) {
    console.log("".concat(numberToCheck, " is Prime!"));
}
else {
    console.log("".concat(numberToCheck, " is not Prime!"));
}
//                        XXXXXXXXXXXXXXXXXXXXX
// Question No 3: Write a JavaScript function to find the first not repeated character.
function firstNotRepeatedCharacter(str) {
    var charCount = {};
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var char = str_2[_i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var _a = 0, str_3 = str; _a < str_3.length; _a++) {
        var char = str_3[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNotRepeatedCharacter("Hello EveryOne"));
//                        XXXXXXXXXXXXXXXXXXXXX
// Question No 4: Write a JavaScript function that returns the square of a number.
function squareNumber(num) {
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
