function sumAll(...args) { // args — имя массива
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6
