
function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let valueToInsert = array[i]
        j = i - 1

        while (j >= 0 && array[j] > valueToInsert) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = valueToInsert
    }
    return array
}

const arr = [7,9,6,3,1,4,2,8,-3]
console.log(insertionSort(arr))