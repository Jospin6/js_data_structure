class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }

}

const hashTable = new HashTable(50)
hashTable.set("name", "jospin")
hashTable.set("age", 24)
hashTable.display()