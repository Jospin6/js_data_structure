
function bubblSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}
const arr = [9,4,-3,7,1]
console.log(bubblSort(arr))