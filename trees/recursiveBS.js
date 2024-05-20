
const recursiveBs = (array, target) => {
    return search(array, target, 0, array.length - 1)
}

const search = (array, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === array[middleIndex]) {
        return middleIndex
    }
    if (target < array[middleIndex]) {
        return search(array, target, leftIndex, middleIndex -1)
    } else {
        return search(array, target, middleIndex + 1, rightIndex)
    }
}

const arr = [1,2,3,4,5,6,7,8,9]

console.log(recursiveBs(arr, 6)) // -> 5
console.log(recursiveBs(arr, 2)) // -> 1
console.log(recursiveBs(arr, 5)) // -> 4