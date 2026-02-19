function filterArray(arr, fn){
    let new_arr = [];

    for (let el of arr){
        if (fn(el)) {
            new_arr.push(el);
        }
    }
    return new_arr 

}

const arr = [2, 4, -10, 100, 45, 900, 23, 1, 8, 10, 0];
const lessTen = num => num < 10;

console.log(filterArray(arr, lessTen));