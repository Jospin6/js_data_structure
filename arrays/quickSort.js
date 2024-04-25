
function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [7,3,2,-6,8]
console.log(quickSort(arr))