/*You are given a task to fix potholes in a road. The road is described by a string S consisting of N characters. 
Each character represents a single fragment of the road. Character '.' denotes a smooth surface and 'x' denotes a pothole. For example, 
S = "...xxx..x" means that the road starts with three smooth fragments, followed by three potholes, followed by two smooth fragments
and ending with one pothole.

You can choose any number of consecutive potholes and fix all of them. Fixing a segment consisting of K consecutive potholes costs K + 1. 
In the example above, fixing the first two consecutive potholes costs 2 + 1 = 3 and fixing the last pothole costs 1 + 1 = 2. After these fixes, 
the road would look like this: ".....x..."

You are given a budget B. You can fix multiple segments containing potholes as long as you fit in the budget. 
What is the maximum number of potholes you can fix?

Example - Given S = "...xxx..x....xxx." and B = 7, the function should return 5
*/
function solution(s, b) {
    let fixable = 0
    //seperate longest sections of x, move to the front of the array
    let test = s.split('.').sort().reverse()
    //need b >= 2 to fix anything
    while (b > 1) {
        //if there's enough b to fix the longest length of x, fix and deduct from budget
        if (test[0].length < b) {
            fixable += test[0].length
            b -= (test[0].length+1)
            //remove longest length and check the next one
            test.shift()
            continue
        //if there's only enough to fix a partial length, the most fixable is b-1
        } else {
            fixable += (b-1)
            break
        }
    }
    return fixable
}
console.log(solution("...xxx..x....xxx", 7)) //should return 5
console.log(solution("x...xxxxx.xxx.xxxxxxx...xx..x", 9)) //should return 7