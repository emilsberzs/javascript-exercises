const removeFromArray = function(arr, ...theArgs) {
    return arr.filter(val => !theArgs.includes(val) )

};

// Do not edit below this line
module.exports = removeFromArray;
