import MatrixClass from './MatrixClass';

test('isSquareMatrix', () => {
    expect(MatrixClass.sumUpDiagonalsSquareMatrix([[2,1], [2]])).toBe('неверный формат матрицы. Матрица не квадратная');
});
