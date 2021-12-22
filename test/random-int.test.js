const randomInt = require('../src/random-int.js')

test("1-3", () => {
    expect(randomInt(1, 10)).toBeLessThanOrEqual(10);
    expect(randomInt(1, 10)).toBeGreaterThanOrEqual(1);
})

test("100001-100003", () => {
    expect(randomInt(77, 999)).toBeLessThanOrEqual(999);
    expect(randomInt(77, 999)).toBeGreaterThanOrEqual(77);
})

test("0-100", () => {
    expect(randomInt(0, 100)).toBeLessThanOrEqual(100);
    expect(randomInt(0, 100)).toBeGreaterThanOrEqual(0);
})

test("non integer", () => {
    expect(() => {
        randomInt(1, 3.5)
    }).toThrowError('Arguments must be integer')
})
