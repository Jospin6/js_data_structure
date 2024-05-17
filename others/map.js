
const map = (array, fn) => {
    let mapped = []
    for (let i = 0; i < array.length; i++) {
        mapped.push(fn(array[i], i))
    }
    return mapped
}

const arr = map([1,2,3,4], () => 10)

console.log(arr)