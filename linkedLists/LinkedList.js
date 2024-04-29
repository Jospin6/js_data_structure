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

    addAtLast(data){
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
    }

    size(){
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
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
linkedList.addAtLast(10)
linkedList.addFirst(2)
linkedList.print()

console.log("==============")

console.log("List Size: " + linkedList.size())
