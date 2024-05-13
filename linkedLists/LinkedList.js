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

    removeLast(){
        if (!this.head) {
            return
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    removeAt(index){
        if (index < 0 || index > this.size) {
            console.log("Impossible")
            return
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        if (current.next) {
            current.next = current.next.next
        }
    }

    search(value){
        if (this.size === 0) {
            return -1
        }

        let i = 0
        let current = this.head
        
        while (current) {
            if (current.data === value) {
                return i
            }
            current = current.next
            i++
        }
        return -1
    }

    reverse(){
        let prev = null
        let current = this.head
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
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
linkedList.removeTop()
linkedList.print()

console.log("==============")

console.log("List Size: " + linkedList.size())
