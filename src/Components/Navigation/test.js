// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const abc = A.sort(function(a, b) {
        return a - b;
    });

console.log(abc);
}   
