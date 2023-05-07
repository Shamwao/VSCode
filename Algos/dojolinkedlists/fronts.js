// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;              
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addFront(val) {
//             // Creating a new node object with the value provided
//             let new_node = new Node(val);
//     // Checking to see if the current list does not have a head node (if the list is empty)
//     // If the list is empty, place the new node as the head 
//     if(!this.head) {
//         this.head = new_node;
//         return this;
//     }
//     // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
//     new_node.next = this.head // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
//     this.head = new_node;
//     return this;
//         }
// }

//Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

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
newSLL.removeFront()
console.log(newSLL.front())
