const convert = require('./convert');

test('convert 4 por 4', () => {
    expect(convert.convert(4, 4)).toBe(16);
})

test('convert 4 por 4', () => {
    expect(convert.convert(0, 4)).toBe(0);
})

test('toMoney convert float', () => {
    expect(convert.toMoney(5)).toBe('5.00');
})

test('toMoney convert to string', () => {
    expect(convert.toMoney('4')).toBe('4.00');
})