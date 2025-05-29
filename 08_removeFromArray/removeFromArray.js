const removeFromArray = function(arr) {
    let indexOfItem;
    for(let i = 1; i < arguments.length; i++) {
        let findIndexFunction = (item) => item === arguments[i];
        while(arr.findIndex(findIndexFunction) !== -1) {
            indexOfItem = arr.findIndex(findIndexFunction);
            arr.splice(indexOfItem, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
