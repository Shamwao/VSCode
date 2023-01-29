//implement an algo to determine if a string has all unique characters. What if you can't use addtional data structures?

function isUnique(str){
    //check str[0] against str[all], then str[1]...
    test = str.split('').sort()
    for (let i = 0; i < test.length; i++){
        if (test[i]==test[i+1]){
            return false
        }
    }
    //if not, return true
    return true
    //return boolean
}

console.log(isUnique('boolean'))//should return false
console.log(isUnique('abcdefg'))//should return true