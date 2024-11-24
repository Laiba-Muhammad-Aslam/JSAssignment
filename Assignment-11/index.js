// 1. Write a function `isEven` that takes a number as an argument and returns true if the number is even and false if it is odd.

function isEven(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}
// let number = +prompt("Enter a number: ");
// alert(isEven(number));

// 2. Create a function `countVowels` that takes a string and returns the number of vowels in that string.

function countVowels(string){
    let sentence = string.toLowerCase();
    let vowels = 0;
    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"){
            vowels++;
        }
    }
    console.log("No of Vowels: " , vowels);
}
// let sentence = prompt("Enter a String: ");
// countVowels(sentence);

// 3. Write a function `reverseString` that takes a string and returns it reversed (e.g., "hello" becomes "olleh").

function reverseString(str){
    let word = str.split("").reverse().join("");
    console.log(word)
}
// let str = prompt("Enter your Word here.... ");
// reverseString(str);

// 4. Create a function `findMax` that takes an array of numbers and returns the largest number.

function findMax(arr){
    let num = 0;
    console.log(arr);
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > num){
          num = arr[i];
    }
    }
    return num;
}
// let arr = [4, 6, 20, 15, 60];
// console.log(findMax(arr));

// 5. Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same backward as forward).

function isPalindrome(word){
    let newWord = "";
    for(let i = word.length - 1; i>=0; i--){
        newWord+= word[i];
    }
    if(newWord === word){
        console.log("Given Word is Palindrome");
    }else{
        console.log("Given Word is not a Palindrome");
    }
   
}
// let word = prompt("Enter a Word here: ");
// isPalindrome(word.toLowerCase());

// ***********************OR***************************** 

function isPalindrome(word) {
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        // Compare characters from start and end
        if (word[i] !== word[len - 1 - i]) {
            console.log("Given word is not a palindrome");
            return;
        }
    }
    console.log("Given word is a palindrome");
}

// let word = prompt("Enter a word here: ");
// isPalindrome(word.toLowerCase());

// 6. Create a function `fibonacci` that returns the nth Fibonacci number. 

function fibonacci(num){
    let x = 0;
    let y = 1;
    let fn = 0;

    console.log(x)
    while(y <= num){
        console.log(y);
        fn = x + y;
        x = y;
        y = fn;
    }
}
// let num = +prompt("Enter a Number: ");
// fibonacci(num);

// 7. Write a function `factorial` that calculates the factorial of a given number.

function factorial(num){
    if(num === 0 || num === 1){
        return 1
    }else{
        return num * factorial(num - 1);
    }

}
console.log(factorial(4));

// 8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.

function removeDuplicates(...args){
    let removeDuplicates = new Set(...args);
    let newArr = [...removeDuplicates]
    console.log(newArr);
}
let arr = [3, 5, 7, 8, 3, 0, 5];
removeDuplicates(arr);


// 11. Write a function `stringLength` that returns the length of a given string.

function stringLength(str){
    return str.length;
}
// let str = prompt("Enter a String: ");
// console.log(stringLength(str));

// 12. Create a function `toUpperCase` that takes a string and returns it in uppercase.

function toUpperCase(str){
    return str.toUpperCase();
}
// let str = prompt("Enter your String here.... ");
// console.log(toUpperCase(str));

// 71. Write a function `isAdult` that takes an age and returns true if the age is 18 or older, and false otherwise.

function isAdult(age){
    if(age >= 18){
        return true
    }
    else{
        return false
    }
}
// let age = +prompt("Enter your age: ");
// console.log(isAdult(age));

// 73. Write a function `greetUser` that takes a name and returns a greeting message (e.g., "Hello, [name]!").

function greetUser(name){
    return `Hello ${name}`;
}
// let name = prompt("Enter a name here: ");
// console.log(greetUser(name));

// 74. Create a function `squareNumber` that takes a number and returns its square.

function squareNumber(number){
    return number * number;
}
// let number = +prompt("Enter a Number: ");
// console.log(squareNumber(number));