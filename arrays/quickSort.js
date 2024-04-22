
function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let left = [];
    let right = [];

    for (let i = 0; i < array.length; i++) {
        if (i !== pivotIndex) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [7,3,2,6,8,1,0,7,4]
console.log(quickSort(arr))