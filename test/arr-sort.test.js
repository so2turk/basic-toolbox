const arrSort = require('../src/arr-sort.js')

test("ordinary array, a", () => {
    expect(arrSort([3, 575, 33], 'a')).toStrictEqual([3, 33, 575]);
})

test("ordinary array, d", () => {
    expect(arrSort([3, 575, 33], 'd')).toStrictEqual([575, 33, 3]);
})


test("ordinary array, Mm", () => {
    expect(arrSort([3, 99, 1, 43, 766, 11, 1001], 'Mm')).toStrictEqual([1001, 1, 766, 3, 99, 11, 43]);
})

test("ordinary array, mM", () => {
    expect(arrSort([3, 99, 1, 43, 766, 11, 1001], 'mM')).toStrictEqual([1, 1001, 3, 766, 11, 99, 43]);
})

test("array with NaN", () => {
    expect(arrSort([10, 37, NaN, 0], 'a')).toStrictEqual([0, 10, 37, NaN]);
})

test("non integer", () => {
    expect(() => {
        arrSort(1.3, 3.5)
    }).toThrow()
})
