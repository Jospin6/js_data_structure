
const mergeSort = array => {
    if (array.length < 2) {
        return array
    }

    const middle = Math.floor(array.length/2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
    let sortedMergeArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedMergeArray.push(leftArray.shift())
        } else {
            sortedMergeArray.push(rightArray.shift())
        }
    }
    return [...sortedMergeArray, ...leftArray, ...rightArray]
}

const array = [7,8,3,4,1,2]

console.log(mergeSort(array))