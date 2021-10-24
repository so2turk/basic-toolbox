const randomInt = require('../src/random-int.js')

test("1-3", () => {
    expect(randomInt(1, 3)).toBe(1 || 2 || 3);
})

test("100001-100003", () => {
    expect(randomInt(100001, 100003)).toBe(100001 || 100002 || 100003);
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
