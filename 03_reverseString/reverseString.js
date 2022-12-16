const reverseString = function(string) {
let reversed_array = []
for (let i = 0; i < string.length; i++ ){
    reversed_array.unshift(string[i]);
}
let reversed_string = reversed_array.join('')
return reversed_string
};

// Do not edit below this line
module.exports = reverseString;
