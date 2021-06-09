"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatrixClass_1 = __importDefault(require("./MatrixClass"));
test('неверный формат матрицы', function () {
    expect(MatrixClass_1.default.sumUpDiagonalsSquareMatrix([[2, 1], [2]]))
        .toBe('неверный формат матрицы');
});
test('вернет объект со значениями 4 и 3', function () {
    expect(MatrixClass_1.default.sumUpDiagonalsSquareMatrix([
        [2, 1],
        [2, 2],
    ])).toMatchObject({
        mainDiagonalSum: 4,
        minorDiagonalSum: 3,
    });
});
test('неверный формат матрицы', function () {
    expect(MatrixClass_1.default.sumUpDiagonalsSquareMatrix([[]])).toBe('неверный формат матрицы');
});
test('неверный формат матрицы', function () {
    expect(MatrixClass_1.default.sumUpDiagonalsSquareMatrix([[], []])).toBe('неверный формат матрицы');
});
test('вернёт объект с нулями для пустого массива', function () {
    expect(MatrixClass_1.default.sumUpDiagonalsSquareMatrix([]))
        .toMatchObject({
        mainDiagonalSum: 0,
        minorDiagonalSum: 0,
    });
});
