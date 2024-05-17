const createcCounter = init => {
    let currentValue = init
    return {
        increment: () => {
            currentValue++
            return currentValue
        },
        decrement: () => {
            currentValue--
            return currentValue
        },
        reset: () => {
            currentValue = init
            return currentValue
        },
    }
}

const counter = createcCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4