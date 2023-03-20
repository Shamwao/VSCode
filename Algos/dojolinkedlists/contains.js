//Add a method contains(value) to your SLL class, which is given a value as a parameter.  
//Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        let new_node = new Node(value)
        new_node.next = this.head
        this.head = new_node
        return this.head
    }
    contains(value){
        let runner = this.head
        while(runner != null){
            if (runner.value === value){
                return true
            } 
            runner = runner.next
        }
        return false
    } 
}
let newSLL = new SLL()
newSLL.addFront(10)
console.log(newSLL.contains(10))