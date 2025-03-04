function highAndLow(numbers){
    const newArray=numbers.split(" ").map(Number)
    let highest = Math.max(...newArray)
    let lowest = Math.min(...newArray)

    return `${highest} ${lowest}`
}

