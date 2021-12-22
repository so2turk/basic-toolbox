const moveIt = require('../src/move.js')

test("subj is ordinary array, element 'lol', 2nd element, to 0 index", () => {
    expect(moveIt([1, 'lol', 2, 'lol', 'lol', 3], 'lol', 2, 0)).toStrictEqual(['lol', 1, 'lol', 2, 'lol', 3]);
})

test("subj is ordinary array, element 'lol', 2nd element, to last index", () => {
  expect(moveIt([1, 'lol', 2, 'lol', 'lol', 3], 'lol', 2, 5)).toStrictEqual([1, 'lol', 2, 'lol', 3, 'lol']);
})

test("subj is ordinary array, element 'lol', 2nd element, to its own index(3)", () => {
  expect(moveIt([1, 'lol', 2, 'lol', 'lol', 3], 'lol', 2, 3)).toStrictEqual([1, 'lol', 2, 'lol', 'lol', 3]);
})

test("subj is ordinary array, element 'lol', 2nd element, to last index with -1", () => {
  expect(moveIt([1, 'lol', 2, 'lol', 'lol', 3], 'lol', 2, -1)).toStrictEqual([1, 'lol', 2, 'lol', 3, 'lol']);
})

test("subj is ordinary array, element 'lol', 2nd element, to zero index with -arg.length(-5)", () => {
  expect(moveIt([1, 'lol', 2, 'lol', 'lol', 3], 'lol', 2, -5)).toStrictEqual([1, 'lol', 'lol', 2, 'lol', 3]);
})

test("subj is ordinary array, element 'lol', 2nd element, to last index with larger number than arg.length(5<20)", () => {
  expect(moveIt([1, 'lol', 2, 'lol', 'lol', 3], 'lol', 2, 20)).toStrictEqual([1, 'lol', 2, 'lol', 3, 'lol']);
})

test("subj is string, element 'lol', 2nd element, to 11 index", () => {
  expect(moveIt('1lol2lollol3', 'lol', 2, 11)).toStrictEqual('1lol2lol3lol');
})

test("subj is string, element 'lol', 2nd element, to 7 index", () => {
  expect(moveIt('1lol2lollol3', 'lol', 2, 7)).toStrictEqual('1lol2lololl3');
})

test("subj is string, element 'lol', 2nd element, to 20 index", () => {
  expect(moveIt('1lol2lollol3', 'lol', 2, 11)).toStrictEqual('1lol2lol3lol');
})

test("empty array to throw error", () => {
  expect(() => {
    moveIt([], 'lol', 2, 11)
  }).toThrow()
})

test("NaN as a non-array/string case to throw error", () => {
  expect(() => {
    moveIt(NaN, 'lol', 2, 11)
  }).toThrow()
})

test("element that doesn't exist in the string to throw error", () => {
  expect(() => {
      moveIt('1lol2lollol3', 'lil', 2, 11)
  }).toThrow()
})

test("non-integer or zero order element to throw error", () => {
  expect(() => {
      moveIt('1lol2lollol3', 'l0l', 0, 11)
  }).toThrow()
})

test("non integer target index to throw error", () => {
  expect(() => {
      moveIt('1lol2lollol3', 'lil', 2, 11.9)
  }).toThrow()
})
