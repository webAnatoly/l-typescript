function transform<T, P> (
    array: T[],
    mapper: (arg: T) => P
): P[] {
    // TODO
    const result: P[] = [];
    array.forEach(elem => result.push(mapper(elem)));
    return result;
}

function doubleNumber(n: number) {
    return n * 2;
}

function wrapString (
    str: string,
    before: string | null = '[',
    after: string | null = ']',
    replacer: string | null = null
) {
    let result = str;
    if (replacer) {
        result = '';
        for (let i = 0; i < str.length; i++) {
            result += str[i];
        }
    }

    if (before) { result = before + result }
    if (after) { result = result + after }

    return result;
}

const a = transform<number, number> ([1,2,3,4], doubleNumber);
const b = transform<string, string> (['h', 'e', 'l', 'l', 'o'], wrapString);
const c = transform<string, string> (['h', 'e', 'l', 'l', 'o'], (n) => { return wrapString(n, '&', null) });

console.log('a', a);
console.log('b', b);
console.log('c', c);