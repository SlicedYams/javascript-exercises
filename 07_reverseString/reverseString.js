const reverseString = function(str) {
    let splitString = str.split("");
    let finalString = '';
    for(let i = splitString.length - 1; i >= 0; i--) {
        finalString += splitString[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
