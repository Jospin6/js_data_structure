
const binarySearch = (array, target) => {
    let leftIndex = 0
    let rightIndex = array.length -1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === array[middleIndex]) {
            return middleIndex
        }
        if (target < array[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1

}

const arr = [1,2,3,4,5,6,7,8,9]

console.log(binarySearch(arr, 6))