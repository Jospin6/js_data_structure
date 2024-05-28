class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.unshift(value)
    }
}