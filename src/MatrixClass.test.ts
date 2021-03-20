import MatrixClass from './MatrixClass';

test('неверный формат матрицы', () => {
    expect(MatrixClass.sumUpDiagonalsSquareMatrix([[2,1], [2]]))
        .toBe('неверный формат матрицы');
});

test('вернет объект со значениями 4 и 3', () => {
    expect(MatrixClass.sumUpDiagonalsSquareMatrix(
        [
            [2,1],
            [2,2],
        ]
    )).toMatchObject({
        mainDiagonalSum: 4,
        minorDiagonalSum: 3,
    });
});

test('неверный формат матрицы', () => {
    expect(MatrixClass.sumUpDiagonalsSquareMatrix([[]])).toBe('неверный формат матрицы');
});

test('неверный формат матрицы', () => {
    expect(MatrixClass.sumUpDiagonalsSquareMatrix([[], []])).toBe('неверный формат матрицы');
});

test('вернёт объект с нулями для пустого массива', () => {
    expect(MatrixClass.sumUpDiagonalsSquareMatrix([]))
        .toMatchObject({
            mainDiagonalSum: 0,
            minorDiagonalSum: 0,
        });
});
