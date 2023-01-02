const palindromes = function (string) {
    //Create new empty string to host the reversed sting
    let newString = '';
    let oldString = '';

    //Clean up the original string by removing whitespace, special characters and convert to lower case
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/^[a-zA-Z]+$/)) {
            oldString += string[i].toLowerCase();
        }
    }
    //Reverse the cleaned up string and save it to a new string
    for (let i = oldString.length - 1; i >= 0; i--) {
        newString += oldString[i];
    }


    console.log("original: " + string)
    console.log("cleaned: " + oldString)
    console.log("reversed: " + newString)
    return newString.toLowerCase() === oldString.toLowerCase();

};


// Do not edit below this line
module.exports = palindromes;
