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
// console.log(repeatString("Laiba", 2));

// 21 REPEAT 49

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

// 36. Create a function `sumOfDigits` that returns the sum of the digits of a number.

function sumOfDigits(num){
    let number = num.split("");
    let count = 0;
    for(let i =0; i < num.length; i++){
        let strToNum = Number(num[i]);
        count+= strToNum;
    }
    // console.log(number);
    // console.log(count);
    return count;
}
// console.log(sumOfDigits("123"));
// console.log(sumOfDigits("8906"));

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

// 39. Write a function `secondLargest` that finds the second largest number in an array.

function secondLargest(arr){
    let max = Math.max(...arr);
    let secondMax = -Infinity;

    // console.log(max);
    for(let i =0; i < arr.length; i++){
        if(arr[i] < max && arr[i] > secondMax){
            secondMax =  arr[i];
        }
    }
    return secondMax;
}
// console.log("Second Largest Number in the Array is: ",secondLargest([23, 67, 87, 55, 200]));

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
// console.log(mergeSortedArrays(arr1, arr2)); 

// 42. Create a function sumPositiveNumbers that sums all positive numbers in an array.


function sumPositiveNumbers(arr) {
    return arr.reduce((sum, num) => {
      return num > 0 ? sum + num : sum;
    }, 0);
}
// const numbers = [1, -3, 5, 7, -2, 10];
// console.log(sumPositiveNumbers(numbers)); 

// 43. Write a function `extractDomain` that extracts the domain from a URL.

function extractDomain(url) {
    let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
    domain = domain.split('/')[0];
    return domain;
  }
  
// console.log(extractDomain("https://cloudflare.com/learning/"));
  
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
// let obj1 = {"name": "Laiba", "field": "Computer science"};
// let obj2 = {"student": "Hira", "education": "Commerce"};
// console.log(mergeObjects(obj1, obj2));

// 48 (Repeat) 

// 49. Write a function `randomInteger` that generates a random integer between two given values.

function randomInteger(num1, num2) {
    let ran = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    console.log(ran);
}
// randomInteger(7,10);

// 50. Create a function `uniqueArray` that returns an array with duplicate values removed.

function uniqueArray(arr){
    let checkArr = arr;
    // console.log(checkArr);
    let newArr = [];
    for(let i = 0; i< checkArr.length; i++){
        if(!(newArr.includes(checkArr[i]))){
            // console.log("nhi hai yeh wala");
            newArr.push(checkArr[i]);
        }else{
            // console.log("hai bhai yeh");
            console.log("Exists in the array...")
        }
}
// console.log("Unique Array :", newArr)
}
// let myArr = [76, 89, 76, 10, 100, 10, 65, 32, 32, 87, 100];
// uniqueArray(myArr);

// 51. Write a function `isAnagram` that checks if two strings are anagrams of each other (e.g., "listen" and "silent").

function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// console.log(isAnagram("listen", "silent")); 
// console.log(isAnagram("hello", "world"));   
// console.log(isAnagram("Astronomer", "Moon starer")); 

// 52. Create a function `removeVowels` that takes a string and returns a new string with all vowels removed.

function removeVowels(str){
    let myStr = str.split("");
    let myArr = [];

    for (let i = 0; i < myStr.length; i++) {  
        if (myStr[i] !== "a" && myStr[i] !== "e" && myStr[i] !== "i" && myStr[i] !== "o" && myStr[i] !== "u" &&
            myStr[i] !== "A" && myStr[i] !== "E" && myStr[i] !== "I" && myStr[i] !== "O" && myStr[i] !== "U") {
            myArr.push(myStr[i]);
        }
    }
    
    console.log(myArr.join("")); 
}
removeVowels("Laiba Aslam");

// 53. Write a function `getAge` that calculates the age of a person based on their birth year.

function getAge(year){
    let birthYear = year;
    let date = new Date().getFullYear();
    let age = date - birthYear;
    // console.log(date);
    // console.log(`Your Age is: ${age}`);
}
getAge(2004);

// 54. Create a function `findMissingNumber` that finds the missing number in a given array of consecutive integers.

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
// const arr = [1, 2, 4, 5, 6];
// console.log(findMissingNumber(arr));

// 55. Write a function `countUppercase` that counts the number of uppercase letters in a string.

function countUppercase(str) {
    let count = 0;
    for (let char of str) {
      if (char >= 'A' && char <= 'Z') {
        count++;
      }
    }
    return count;
}
// const strr = "Hello World!";
// console.log(countUppercase(strr)); 

// 56. Create a function `validateEmail` that checks if a given email address is valid.

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(regex.test(email)) {
        console.log("Email is valid");
    } else {
        console.log("Email is not valid");
    }
}

// validateEmail("laiba@gmail.com");  
// validateEmail("myemail");

// 57. Write a function `toggleNavbar` that shows or hides a navigation bar when a button is clicked.

let navbar = document.getElementById("navbar");
let hideBtn = document.getElementById("hide");

hideBtn.addEventListener("click", toggleNavbar);

function toggleNavbar(){
    navbar.style.display = "none";
}

// 58. Create a function `submitForm` that validates a form and submits it if all fields are filled correctly.

function submitForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    
    let isValid = true;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        isValid = false;
    }
    if (name.trim() === "") {
        alert("Name field cannot be empty");
        isValid = false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        isValid = false;
    }
    if (isValid) {
        alert("Form is valid. Submitting form...");
    } else {
        alert("Form validation failed. Please correct the errors.");
    }
}


// 59. Write a function `addToCart` that adds an item to a shopping cart and updates the cart count.

function addToCart(item){
    let amount = 0;
    let products = ["shoes", "clothes", "lip balm"];
    let userProduct = item;
    if(products.includes(userProduct)){
        // console.log("found");
        amount+=1000;
    }else{
        console.log("Not found")
    }
    return amount;
}
// addToCart("lip balm");
// addToCart("lip baaalm");
// addToCart("shoes");
// console.log(addToCart("clothes"));

// 60. Create a function `searchProducts` that searches for products in an array and returns matching results.

function searchProducts(search){
    let arr = ["eyeliner", "foundation", "lipstick", "sun block" ];
    
    let product = arr.find(item => item === search);
    
    if (product) {
        console.log("Product found: " + product);
    } else {
        console.log("Product not found");
    }
}

// searchProducts("chips");        
// searchProducts("foundation");   

// 61. Write a function `sortByPrice` that sorts an array of products by their price

function sortByPrice() {
    let arr = [200, 100, 50, 400, 3000, 300];
    arr.sort((a, b) => a - b);  
    return arr;
}

// console.log(sortByPrice());

// 62. Create a function `highlightText` that highlights specific keywords in a block of text.

function highlightText() {
    let text = "Sunflower was used in many ways throughout the various American Indian tribes. Seed was ground or pounded into flour for cakes, mush or bread. Some tribes mixed the meal with other vegetables such as beans, squash, and corn. The seed was also cracked and eaten for a snack. There are references of squeezing the oil from the seed and using the oil in making bread."
    
    let highlightedText = text.replace(/beans/i, "<mark>$&</mark>");
    
    console.log(highlightedText);
}

// highlightText();

// 63. Write a function `validatePassword` that checks if a password meets certain criteria (length, special characters, etc.).

function validatePassword(password){
    let condition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if(password.match(condition)){
        console.log("It is a valid Password");
    }else{
        console.log("Not a Valid Password, Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:");
    }
}
// validatePassword("err123@");
// validatePassword("Ery10owr");

// 64. Create a function `scrollToTop` that scrolls the page to the top smoothly when called.

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// let scrollBtn = document.getElementById("scrollBtn");
// scrollBtn.addEventListener("click", scrollToTop);

// 65. Write a function `updateProfilePicture` that allows a user to upload a new profile picture

function updateProfilePicture(){
    let newImg = document.getElementById("file");
    let imgContainer = document.getElementById("img");
    
    if(newImg.files && newImg.files[0]){
        let newUrl = URL.createObjectURL(newImg.files[0]);
        imgContainer.src = newUrl;
    }
}
// updateProfilePicture();

// 66. Create a function `validatePhoneNumber` that checks if a phone number is valid based on a specified format.

function validatePhoneNumber(number){
    let phoneRegex = /^(?:\+92|03)\d{9}$/;
    if(number.match(phoneRegex)){
        console.log("It is a valid Number");
    }else{
        console.log("It is not a valid Number");
    }
}
validatePhoneNumber("03245678940");
validatePhoneNumber("032456780");
validatePhoneNumber("+92245786780");

// 67. Write a function `getCurrentDateTime` that returns the current date and time in a specified format.

function getCurrentDateTime(){
    let date = new Date().getDate();
    let month = (new Date().getMonth()) + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = (new Date().getMinutes()) + 1;
    let sec = new Date().getSeconds();

    return date + " " + month + " " + year + " " + hour + " " + min + " " + sec;
}
// console.log(getCurrentDateTime());

// 68. Create a function `generateRandomPassword` that creates a random password based on user-defined criteria.

function generateRandomPassword(){
    let num = prompt("Do you want Numbers in your Password? Y | N" );
    let alpha = prompt("Do you want Alphabets in your Password? Y | N");
    let speChar = prompt("Do you want Special Characters in your Password? Y | N");

    let numbers = "0123456789";
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

    let charPool = "";

    if(num === "Y" || num === "y") charPool += numbers;
    if(alpha === "Y" || alpha === "y") charPool += alphabets;
    if(speChar === "Y" || speChar === "y") charPool += specialChars;

    if(charPool === ""){
        console.log("Please select at least one type of characters for your password.");
        return;
    }
    let passwordLength = 12;
    let password = "";
    
    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    console.log("Generated Password: " + password);
}

// generateRandomPassword();

// 69. Write a function `rotateArray` that rotates an array to the right by a given number of steps.

function rotateArray(arr, steps){
    let totalNumbers = arr.length;

    // Handle the case where steps > totalNumbers by using modulo
    steps = steps % totalNumbers;

    // Split the array into two parts and swap their positions
    let rotatedPart = arr.slice(-steps); // Get the last 'steps' elements
    let remainingPart = arr.slice(0, totalNumbers - steps); // Get the rest of the elements

    // Combine both parts to form the rotated array
    let newArr = [...rotatedPart, ...remainingPart];

    console.log("New Array:", newArr);
}

// rotateArray([1, 3, 5, 7, 9], 2);
// rotateArray([1, 2, 3, 4, 5], 4);

// 70. Create a function `comparePasswords` that checks if two password fields match during registration.

function comparePasswords(password){
    let passwords = {
        "Laiba" : "1234",
        "Rimsha": "897",
        "Amna": "779",
    }
    let userPassword = password;

    let passwordValues = Object.values(passwords);
    let isValid = false;


    for(let i =0; i < passwordValues.length; i++){
        if(userPassword === passwordValues[i]){
            isValid = true;
            break;
        }
    }

    if(isValid){
        console.log("Password is Valid");
    }else{
        console.log("Password is not Valid");
    }
       
}
comparePasswords("1234");
comparePasswords("348");


// 71. Write a function `isAdult` that takes an age and returns true if the age is 18 or older, and false otherwise.

function isAdult(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}
// console.log(isAdult(16));
// console.log(isAdult(18));
// console.log(isAdult(20));

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

// 72. Create a function `concatStrings` that takes two strings and returns them concatenated together.

function concatStrings(str1, str2){
    return str1 + " " + str2;
}
console.log(concatStrings("Hello," , "My name is Laiba Muhammad Aslam"));

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

// 75. Write a function `countChars` that counts the number of characters in a string.

function countChars(str){
    return str.length;
}
// console.log("No of characters in a String", countChars("Hello this is Laiba Aslam"));

// 76. Create a function `isString` that checks if a given input is a string and returns true or false

function isString(str){
    let isStr = typeof str;
    // console.log(isStr);
    if(isStr == "string"){
        return "Given Input is String";
    }else{
        return "Given input is not String";
    }
}
// console.log(isString("Laiba"));
// console.log(isString(662));

// 77. Write a function `findMin` that takes an array of numbers and returns the smallest number.

function findMin(arr){
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
// console.log("Minimum number in Array: ",findMin([89, 8, 33, 90, 7, 5]));

// 78. Create a function `splitString` that takes a string and returns an array of its characters.

function splitString(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    console.log(arr);
}
// splitString("Laiba");

// 79. Write a function `removeLastElement` that takes an array and returns a new array with the last element removed.

function removeLastElement(arr){
    let newArr = arr.pop();
    return arr;
}
// console.log(removeLastElement([45, 98, 76, 10, 14]));

// 80. Create a function `toggleCase` that takes a string and toggles the case of each character.

function toggleCase(str){
    let newStr = "";
    for(let i = 0; i< str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            newStr+= str[i].toLowerCase();
        }
        else if(str[i] == str[i].toLowerCase()){
            newStr+= str[i].toUpperCase();
        }else{
            newStr+= str[i];
        }
    }
    return newStr;
}
console.log(toggleCase("laIba"));
console.log(toggleCase("MaHA!!"));
