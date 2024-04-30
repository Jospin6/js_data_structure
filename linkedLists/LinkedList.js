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

    addAt(index, data){
        if (index < 0 || index > this.size) {
            console.log("Impossible")
            return
        }
        const node = new Node(data)
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        node.next = current.next
        current.next = node
    }

    removeTop(){
        if (!this.head) {
            return
        }
        this.head = this.head.next
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
linkedList.addAt(3, 20)
linkedList.print()

console.log("==============")

console.log("List Size: " + linkedList.size())
