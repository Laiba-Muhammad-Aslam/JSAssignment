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
let sentence = prompt("Enter a String: ");
countVowels(sentence);