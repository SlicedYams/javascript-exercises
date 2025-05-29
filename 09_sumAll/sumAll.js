const sumAll = function(smallerNumber, biggerNumber) {

    if(typeof smallerNumber != "number" || typeof biggerNumber != "number") {
        return "ERROR";
    }
    if(smallerNumber % 1 != 0 || biggerNumber % 1 != 0 || smallerNumber < 0 || biggerNumber < 0) {
        return "ERROR";
    }
    if(smallerNumber > biggerNumber) {
        let temp = smallerNumber;
        smallerNumber = biggerNumber;
        biggerNumber = temp;
    }
    let sum = 0;
    for(let i = smallerNumber; i <= biggerNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
