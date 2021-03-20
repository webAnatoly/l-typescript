type Matrix = number[][];

export default class MatrixClass {
     /**
     * @param matrix квадратная матрица
     *
     * @returns объетк содержащий сумму главной диагонали и сумму вторичной диагонали матрицы | строку с ошибкой
     */
    static sumUpDiagonalsSquareMatrix(matrix: Matrix) {
        let result = {
            mainDiagonalSum: 0,
            minorDiagonalSum: 0,
        };

        let error = null;
        const isSquareMatrix: boolean = matrix.every(row => row.length === matrix.length);

        if (!isSquareMatrix) {
            error = 'неверный формат матрицы. Матрица не квадратная';
        }

        matrix.forEach(function(currentRow, index){
            result.mainDiagonalSum += Number(currentRow[index]);
            result.minorDiagonalSum += Number(currentRow[currentRow.length - 1 - index]);
        });

        if (error) {
            return error;
        }

        return result;
    }
}
