const Node = require("./node")

class LinkedList {
    constructor(){
        this.head = null
    }

    addFirst(data){
        const node = new Node(data)
        node.next = this.head
        this.head = node
    }

    print(){
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()

linkedList.addFirst(5)
linkedList.addFirst(12)
linkedList.addFirst(7)
linkedList.print()
