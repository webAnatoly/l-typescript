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

class MyClass {

    // Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами
    showName() {
        console.log('using pseudo array arguments: ', arguments.length );
        console.log('using pseudo array arguments: ', arguments[0] );
        console.log('using pseudo array arguments: ', arguments[1] );

        // Объект arguments можно перебирать
        // for (let arg of arguments) alert(arg);
    }
}

const myClass = new MyClass();

// Вывод: 2, Юлий, Цезарь
myClass.showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
myClass.showName("Илья");

// Примеры использования Оператора расширения (по-английски он наверное называется Spread Operator)
const arr = [3, 5, 1];

console.log('Spread operator example: ', (Math.max(...arr))); // 5 (оператор "раскрывает" массив в список аргументов)

const arr1 = [1, -2, 3, 4];
const arr2 = [8, 3, -8, 1];

console.log('Spread operator example: ', Math.max(...arr1, ...arr2)); // 8

const arr3 = [1, -2, 3, 4];
const arr4 = [8, 3, -8, 1];
console.log('Spread operator example: ', Math.max(1, ...arr3, 2, ...arr4, 25) ); // 25


// Оператор расширения можно использовать и для слияния массивов:
const arr5 = [3, 5, 1];
const arr6 = [8, 9, 15];

const merged = [0, ...arr5, 2 ,...arr6];

console.log('Spread operator example: ', merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)


// оператор расширения подойдёт для того, чтобы превратить строку в массив символов
const str = "Привет";

console.log('Spread operator example: ', [...str] ); // П,р,и,в,е,т
console.log('Тоже самое что и Array.from', Array.from(str));
