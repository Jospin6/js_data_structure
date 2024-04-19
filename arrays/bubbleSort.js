
function bubblSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}
const arr = [9,4,-3,7,1,3,2]
console.log(bubblSort(arr))