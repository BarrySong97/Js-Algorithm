let arr = [2, 1, 3, 4, 5, 12, 0, 3, 4, 0, 0];

function basic() {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        } 
    }
}

function advance() {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        } 
    }
}

advance()
console.log(arr);