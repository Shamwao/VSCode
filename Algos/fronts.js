class SLLNode {
    constructor(val){
        this.value=val 
        this.next=null
    }

    addFront(val) {
        var newNode = new SLLNode
        newNode.next =this.head 
        this.head= newNode
        return this.head
    }

    removeFront() {
        var removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
        return this.head
}

    front() {
        if (this.head ==null){
            return null
        }
        else {
            return this.head.value
        }
    }
}