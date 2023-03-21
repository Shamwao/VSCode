//RECURSIVE SIGMA
//Write a recursive function that given a number returns the sum of integers from 1 to that number.
//Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function sigma(n) {
    if (n < 0){
        return 0
    }
    let sum = n
    while (n > 0){
        return sum += sigma(n-1)
    }
    return sum
}
console.log(sigma(5))//should be 15

//RECURSIVE FACTORIAL
//Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
//If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(n) {
    if (n < 0){
        return 0
    } else if (n===0){
        return 1
    }
    let tot = n
    while (n > 0){
        return tot *= factorial(n-1)
    }
    return tot
}
console.log(factorial(3)) //should return 6