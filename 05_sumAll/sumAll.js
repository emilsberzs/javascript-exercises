const sumAll = function (start, end) {
    let small = 0
    let big = 0
    let sum = 0

    //Check if paramaters are positive numbers, if not, return ERROR
    if (start < 0 || end < 0 || typeof(start) != 'number' || typeof(end) != 'number') {
        return "ERROR"
    } else {
        //Check which number is larger to deteremine start and end
        if (start > end) {
            big = start
            small = end
        } else if (start < end) {
            big = end
            small = start
        }
        //Sum all the numbers between smallest and largest
        for (let i = small; i <= big; i++) {
            sum += i;
        }
        //return the sum of numbers
        return sum;

    }
};

// Do not edit below this line
module.exports = sumAll;
