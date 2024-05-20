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
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item.key === key)
            if (!sameKeyItem) {
                bucket.push([key, value])
            } else {
                sameKeyItem[1] = value
            }
        }
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item.key === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
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
hashTable.set("live", "Kasali")
hashTable.set("age", 24)
hashTable.display()