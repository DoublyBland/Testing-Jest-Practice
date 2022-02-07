const calculator = require('./calculator');

test('adds', () => {
    expect(calculator.add(2,2)).toBe(4);
})

test('subtrancts', () => {
    expect(calculator.subtract(2,2)).toBe(0);
})

test('multiplies', () => {
    expect(calculator.multiply(2,3)).toBe(6);
})

test('divides', () => {
    expect(calculator.divide(4,2)).toBe(2);
})