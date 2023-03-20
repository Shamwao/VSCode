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
    removeFront(){
        if(!this.head){
            return null
        }
        let removeMe = this.head
        this.head = removeMe.next
        removeMe.next = null
        return this.head
    }
    display(){
        let list =""
        if (this.head ==null){
            return list
        }
        list += this.head.value
        let runner = this.head.next
        while (runner != null){
            list += ", " + runner.value
            runner=runner.next
        }
        return list
    }
    front(){
        if(this.head == null){
            return null
        } else {
            return this.head.value
        }
    }
}

let newSLL = new SLL()
newSLL.addFront(10)
newSLL.addFront(5)
newSLL.addFront(154)
// newSLL.removeFront()
console.log(newSLL.display())