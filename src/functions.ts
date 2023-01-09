function sumAll(...args: number[]): number { // args — имя массива
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6


function showName(firstName: string, lastName: string, ...titles: string[]) {
    console.log( firstName + ' ' + lastName ); // Юлий Цезарь

    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    console.log('name 0: ', titles[0] ); // Консул
    console.log('name 1: ', titles[1] ); // Император
    console.log('name 2: ', titles.length ); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");
