class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertix(vertix){
        if (!this.adjacencyList[vertix]) {
            this.adjacencyList[vertix] = new set()
        } 
    }
}