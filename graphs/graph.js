class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertix(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new set()
        } 
    }
    addEdge(vertex1, vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertix(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertix(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (const adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for (const vertex in this.adjacencyList) {
            console.log(vertex + "->" + this.adjacencyList[vertex])
        }
    }
}