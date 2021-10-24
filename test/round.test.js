const round = require('../src/round.js')

test("1.54567", () => {
    expect(round(1.54567, 3)).toBe(1.546);
})

test("1.54567", () => {
    expect(round(1.54567, 2)).toBe(1.55);
})

test("1.54567", () => {
    expect(round(1.54567, 1)).toBe(1.5);
})

test("1.54567", () => {
    expect(round(1.54567, 0)).toBe(2);
})

test("null", () => {
    expect(round(null, 1)).toBe(0);
})

// test("non integer", () => {
//     expect(round(1, 3.5)).toThrowError()
// })
