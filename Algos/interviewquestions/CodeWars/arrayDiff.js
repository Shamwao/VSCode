function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++){
        let count =0
        if (a[i]=== b[0]){
        count ++
    }
    let index = a.indexOf[b[0]]
    a.splice(index,count)
    console.log(count)
    }
    return a
}
console.log(arrayDiff([1,2,2], [2]))