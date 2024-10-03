// var fruits = document.getElementById("collect").childNodes[5].nodeName;
// var fruits = document.getElementById("collect").childNodes;
// console.log(fruits);

// ASSIGNMENT 
//1) You have a grocery store use vanilla function to store the data of items (using Functions)
// fruits, clothes , etc...

// function Plan(name, price, space, transfer, pages, discountMonths) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//     this.calcAnnual = function(percentIfDisc) {
//     var bestPrice = this.price;

//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//         if (this.discountMonths[i] === thisMo) {
//         bestPrice = this.price * percentIfDisc;
//         break;

//     }
// }
//     return bestPrice * 12;
// };
// }

// bestprice * 12 mai 12 ki jagha variable banana hoga for assignment 
// ASSIGNMENT # 3  USE PROTOTYPE 

function Dog(name, age, breed){
    // this is a constructor
    this.name = name;
    this.age = age;
    this.breed = breed
}
// console.log(Dog)
console.log(Dog.prototype)