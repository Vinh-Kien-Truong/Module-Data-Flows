// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    const nums = numbers.filter(item => typeof item === 'number');
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return nums.length === 0 ? 0 : sum / nums.length;   
}

module.exports = average;
