var counter = function(arr){
    return'there are ' + arr.length + ' elements in the array';
};

var adder = function(a,b){
    return `the sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
};