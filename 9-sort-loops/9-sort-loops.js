const numbers = [-11, -40, 5, 190, 0];

function sortArray(numbers) {
    for (i = 0; i < numbers.length; i++) {
            for (j = i + 1; j < numbers.length; j++){
                if (numbers[i] > numbers[j]) {
                    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
                }
            }
    }

    return numbers

}

console.log(sortArray([4, -9, 10, 0, -17, 99, -133]))