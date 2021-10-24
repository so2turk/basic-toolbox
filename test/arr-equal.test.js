const arrEqual = require('../src/arr-equal.js')

test("ordinary array", () => {
    expect(arrEqual([1, 2, 3], [1, 2, 3])).toBe(true);
})

test("different lenth", () => {
    expect(arrEqual([1, 2, 3], [1, 2])).toBe(false);
})

test("array with NaN", () => {
    expect(arrEqual([1, 2, NaN], [1, 2, NaN])).toBe(true);
})

test("empity array", () => {
    expect(arrEqual([], [])).toBe(true);
})

test("nested-false", () => {
    expect(arrEqual([1, [2, 3]], [1, 2, 3])).toBe(false);
})

test("nested-true", () => {
    expect(arrEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
})

test("array with undefined-true", () => {
    expect(arrEqual([1, 2, undefined], [1, 2, undefined])).toBe(true);
})

test("array with undefined-false", () => {
    expect(arrEqual([1, undefined], [1, 2])).toBe(false);
})

test("array with null-false", () => {
    expect(arrEqual([1, 2, 3], [1, 2, null])).toBe(false);
})

test("string", () => {
    expect(() => {
        arrEqual('string', ['string'])
    }).toThrow();
})

