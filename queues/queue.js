class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.unshift(value)
    }

    dequeue(){
        this.queue.shift()
    }

    size(){
        return this.queue.length
    }
}