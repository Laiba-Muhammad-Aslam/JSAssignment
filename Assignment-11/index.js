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
// console.log(factorial(4));

// 8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.

function removeDuplicates(...args){
    let removeDuplicates = new Set(...args);
    let newArr = [...removeDuplicates]
    console.log(newArr);
}
// let arr = [3, 5, 7, 8, 3, 0, 5];
// removeDuplicates(arr);

// 9. Write a function `sumArray` that takes an array of numbers and returns the sum.

function sumArray(arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}
// let arr = [2, 4, 5, 7];
// console.log("Sum of Array: " + sumArray(arr));

// 10. Create a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
// const numbers = [5, 2, 9, 1, 5, 6];
// console.log(sortArray(numbers));

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

// 13. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.

function capitalizeFirstLetter(word){
    let newWord = "";
    for(let i=0; i<word.length; i++){
       newWord = word[0].toUpperCase() + word.slice(1);
    }
    return newWord;

}
// console.log(capitalizeFirstLetter("hello"));
// console.log(capitalizeFirstLetter("mango"));

// 14. Create a function `mergeArrays` that takes two arrays and merges them into one.

function mergeArrays(arr1, arr2){
    let finalArray = [...arr1, ...arr2];
    return finalArray;
}
// let arr1 = [1, 3, 66, 90];
// let arr2 = [78, 92, 100];
// console.log(mergeArrays(arr1, arr2));

// 15. Write a function `isPrime` that checks if a number is prime.

function isPrime(number){
    if(number % 2 === 0){
        return "It is not a Prime Number";
    }else{
        return "It is a Prime Number";
    }
}
// console.log(isPrime(1));
// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(4));

// 16. Create a function `countWords` that counts the number of words in a string.

function countWords(str){
    str = str.trim();

    if(str === ""){
        return 0;
    }

    const word = str.split(/\s+/);

    return word.length;

}
// const str = "Hello, my name is Laiba Muhammad Aslam";
// console.log(countWords(str));

// 17. Write a function `arrayContains` that checks if an array contains a specific value.

function arrayContains(num){
    let number = [3, 5, 8, 10, 100];
    for(let i = 0; i< number.length; i++){
        if(num === number[i]){
            return "Number is exist in the array";
        }
    }
    return "Number doesn't exist";
}
// let askNumber = +prompt("Enter a number: ");
// console.log(arrayContains(askNumber));

// 18. Create a function `uniqueElements` that returns an array of unique elements from a given array.

function uniqueElements(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
  }
  
const array = [1, 2, 2, 3, 4, 4, 5];
// console.log(uniqueElements(array)); 

// 19. Write a function `flattenArray` that flattens a nested array.

function flattenArray(arr){
    // console.log(arr.flat());
}
// flattenArray([1, 5, 8, [55, 90, 23], 86, [52, 100, 89], 900, 456, 986, [567, 378, 846]]);

// 20. Create a function `repeatString` that takes a string and a number, and returns the string repeated that many times

function repeatString(str, number){
    if(number < 0){
        return "";
    }else{
        return str.repeat(number);
    }
}
console.log(repeatString("Laiba", 2));

// 22. Create a function `average` that calculates the average of an array of numbers.

function average(arr){
    let len = arr.length;
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum+= arr[i];
    }
    return sum / len;
}
// console.log(average([6, 8, 9, 5, 0]));

// 23. Write a function `removeSpaces` that removes all spaces from a string.

function removeSpaces(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
      if (str[i] !== " ") str[count++] = str[i]; 
    return count;
  }
let  str = "U BIT ka rac hi ".split("");
let i = removeSpaces(str);
// console.log(str.join("").substring(0, i));

// 24. Create a function `difference` that returns the difference between the largest and smallest numbers in an array.

function difference(arr){
    let max = -Infinity;
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] > max){
        max = arr[i];
    }if(arr[i] < min){
        min = arr[i];

    }
    }
    console.log(`max: ${max}`);
    console.log(`min: ${min}`);
    return max - min;
}
// console.log(difference([3, 7, 24, 9]));

// 25. Write a function `shuffledArray` that takes an array and returns it shuffled randomly.

function shuffledArray(arr) {
    let newArr = [];
    let usedIndices = []; 
    for (let i = 0; i < arr.length; i++) {
        let ran;
        do {
            ran = Math.floor(Math.random() * arr.length); 
        } while (usedIndices.includes(ran)); 
        usedIndices.push(ran); 
        newArr[ran] = arr[i]; 
    }
    console.log(newArr);
    return newArr;
}

// shuffledArray([78, 1, 6, 7, 9]);

// 26. Create a function `longestWord` that returns the longest word in a string.

function longestWord(str){
    let words = str.split(' ');
    // console.log(words);
    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
// console.log(longestWord("Hello this is me"));
// console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// 27. Write a function `countDown` that takes a number and counts down to zero, logging each number.

function countDown(num){
    for(i= num; i>=0; i--){
        console.log(i);
    }
}
// countDown(60);

// 28. Create a function `firstNonRepeatingChar` that finds the first non-repeating character in a string.

function firstNonRepeatingChar(word) {
    let charCount = {};

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // console.log(charCount);
    for (let i = 0; i < word.length; i++) {
        if (charCount[word[i]] === 1) {
            return word[i];
        }
    }
    return null;
}
// console.log(firstNonRepeatingChar("Hello"));

// 29. Write a function `toTitleCase` that converts a string to title case.

function toTitleCase(str){
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
// console.log(toTitleCase("this is a sample string"));

// 30. Create a function `removeElement` that removes a specified element from an array.

function removeElement(elem){
    let arr = ["Mango", "Banana", "Apple", "Cheery"];
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        if(elem != arr[i]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(removeElement("Apple"));

// OR 

/*
function removeElement(arr, elem) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(elem !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(removeElement(fruits, "Apple"));
*/

// 31. Write a function `swap` that swaps the values of two variables.

function swap(var1, var2){
    let num1 = var1;
    let num2 = var2;
    let temp = num2;
    num2 = num1;
   console.log(temp, num2); 
}
// swap(5,6);

// 32. Create a function `countOccurrences` that counts how many times a specific value appears in an array.

function countOccurrences(arr, value){
    let count = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === value){
            count++;
        }
    }
    return count;
}
// let arr = [78, 89, 7, 78, 11, 22, 33, 11, 99, 0, 78, 7];
// let value = 78;
// console.log(countOccurrences(arr, value));

// 33. Write a function `mostFrequent` that finds the most frequently occurring element in an array.

function mostFrequent(arr){
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequentElement;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
        
        if(frequencyMap[element] > maxCount){
            maxCount = frequencyMap[element];
            mostFrequentElement = [element];
        }
    }
    console.log(frequencyMap);
    return mostFrequentElement;
}
// let arr = [78, 89, 7, 78, 11, 22, 33, 11, 99, 0, 78, 7];
// console.log(mostFrequent(arr));

// 34. Create a function `combineStrings` that concatenates two strings with a space in between.

function combineStrings(str1, str2){
    return str1 + " " + str2;
}
// console.log(combineStrings("Hello", "World"));

// 35. Write a function `randomColor` that generates and returns a random RGB color.

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    console.log(red, green, blue);

    return `rgb(${red}, ${green}, ${blue})`;
}
// console.log(randomColor());

// 37. Write a function `findIndex` that returns the index of a specific value in an array.

function findIndex(arr, value) {
    return arr.indexOf(value);
}
  
// console.log(findIndex([10, 20, 30, 40], 30)); 
// console.log(findIndex([5, 7, 9, 11], 11));    
// console.log(findIndex([1, 2, 3], 4));        // Output: -1 (not found)

// 38. Create a function `shuffleString` that shuffles the characters of a string randomly.

// function shuffleString(str){
    
//     let newWord = "";
//     for(let i = 0; i < str.length; i++){
//         let ran = Math.floor(Math.random() * str.length);
//         console.log(ran);
//         newWord += str[ran];
//     }
//     console.log(newWord)
// }
// shuffleString("Hello");
 
function shuffleString(str) {
    let arr = str.split('');
    
    // Fisher-Yates Shuffle Algorithm to shuffle the array
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}
// console.log(shuffleString("Hello"));

// 40. Create a function `stringToArray` that converts a string to an array of words.

function stringToArray(str){
    return str.split(" ");
}
// console.log(stringToArray("Hello This is Laiba Aslam"));

// 41. Write a function `mergeSortedArrays` that merges two sorted arrays into one sorted array.

// function mergeSortedArrays(arr1, arr2){
//     let newArr1 = arr1.sort();
//     let newArr2 = arr2.sort();

//     let newArr = [...newArr1, ...newArr2];
//     return newArr;
// }
// let arr1 = [78, 90, 5, 45];
// let arr2 = [38, 50, 51, 4];
// console.log(mergeSortedArrays(arr1,arr2));


function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

let arr1 = [5, 45, 78, 90];  
let arr2 = [4, 38, 50, 51];
console.log(mergeSortedArrays(arr1, arr2)); 

// 42. Create a function sumPositiveNumbers that sums all positive numbers in an array.


function sumPositiveNumbers(arr) {
    return arr.reduce((sum, num) => {
      return num > 0 ? sum + num : sum;
    }, 0);
}
// const numbers = [1, -3, 5, 7, -2, 10];
// console.log(sumPositiveNumbers(numbers)); 
  
// 44. Create a function `sumEvenNumbers` that sums all even numbers in an array.

function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
      if (num % 2 === 0) {
        sum += num;
      }
      return sum;
    }, 0);
  }
  
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(sumEvenNumbers(numbers)); 

// 45. Write a function `getDayOfWeek` that returns the day of the week for a given date.

function getDayOfWeek(date){
    let userDate = new Date(date).getDay();
    let day;
    switch(userDate){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";  
            break;          
    }
    return day;
}
// console.log("Day is: ", getDayOfWeek("9 January 2025"));
// console.log("Day is: ", getDayOfWeek("17 March 2020"));

// 46. Create a function `largestEvenNumber` that finds the largest even number in an array.

function largestEvenNumber(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        return null;
    }
    return Math.max(...evenNumbers);
}
// const arr = [1, 2, 3, 4, 5, 6];
// const result = largestEvenNumber(arr);
// console.log(result);  

// 47. Write a function `mergeObjects` that merges two objects into one.

function mergeObjects(obj1, obj2){
    let merged = {...obj1, ...obj2};
    return merged;
}
let obj1 = {"name": "Laiba", "field": "Computer science"};
let obj2 = {"student": "Hira", "education": "Commerce"};
console.log(mergeObjects(obj1, obj2));

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