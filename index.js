numbers1 = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]
numbers2 = [45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5]
const searchMinMax = (x) => {
    console.log("Nilai Minimal : " + Math.min(...x))
    console.log("Nilai Maksimal : " + Math.max(...x))
}

searchMinMax(numbers1)
searchMinMax(numbers2)

