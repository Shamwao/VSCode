function sumTwoSmallestNumbers(numbers) {  
    let x = Math.min(...numbers)
    let index = numbers.indexOf(x)
    numbers.splice(index, 1)
    let y = Math.min(...numbers)
    return x + y
}