"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatrixClass = /** @class */ (function () {
    function MatrixClass() {
    }
    /**
    * @param matrix квадратная матрица
    *
    * @returns объетк содержащий сумму главной диагонали и сумму вторичной диагонали матрицы | строку с ошибкой
    */
    MatrixClass.sumUpDiagonalsSquareMatrix = function (matrix) {
        var result = {
            mainDiagonalSum: 0,
            minorDiagonalSum: 0,
        };
        var error = null;
        var isSquareMatrix = matrix.every(function (row) { return row.length === matrix.length; });
        if (!isSquareMatrix) {
            error = 'неверный формат матрицы';
        }
        matrix.forEach(function (currentRow, index) {
            result.mainDiagonalSum += Number(currentRow[index]);
            result.minorDiagonalSum += Number(currentRow[currentRow.length - 1 - index]);
        });
        if (error) {
            return error;
        }
        return result;
    };
    return MatrixClass;
}());
exports.default = MatrixClass;
