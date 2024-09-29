// QUESTION # 2

var plan1 = {
    name: "Basic", 
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],
    calcAnnual: function(percentIfDisc) {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
    if (plan1.discountMonths[i] === thisMo) {
    bestPrice = plan1.price * percentIfDisc;
    break;
    }
    }
    return bestPrice * 12;
}
};
// console.log("Best Price is " + plan1.calcAnnual());

// QUESTION # 3 

var student = {
    firstName: "Maaz",
    lastName: "Rahim",
    age: 10,
    class: "5 Red",
    fees: 4000,
    studentID: 1,
    sportsScholarshipStatus: true,
    discountPercentage: 30,

    calculateDiscountedFees: function(){
        if(this.sportsScholarshipStatus){
            var discountAmount = (this.discountPercentage / 100) * this.fees;
            var finalFees = this.fees - discountAmount;
            return finalFees;
        }else{
            return this.fees; 
        }
    }

}
console.log("Total Fees of " + student.firstName + " " + student.lastName + " is " + student.fees +" Discounted Fees for " + student.firstName + " " + student.lastName + " is " + student.calculateDiscountedFees());