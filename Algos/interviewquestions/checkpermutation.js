//Given two strings, write a method to decide if one is a permutation of the other.

//permutations have the same characters but in a different order

const isPerm =(s,t) => {
    if (s.length != t.length){
        return false
    }
    let testS = s.split('').sort()
    let testT = t.split('').sort()
    console.log (testS)
    console.log(testT)
    for (let i = 0; i < testS.length; i ++) {
        if (testS[i] === testT[i]){
            continue
        } else {
            return false
        }
    }
    return true
}
console.log(isPerm('marilk', 'klimaa'))