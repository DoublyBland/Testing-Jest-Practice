const casesarCipher = require('./casesarCipher');

test('Returns letter shifted 1 to the right a->b', () => {
    expect(casesarCipher('defend', 1)).toBe('efgfoe')
})

test('Returns letter shifted 1 to the left b->a', () => {
    expect(casesarCipher('defend', -1)).toBe('cdedmc')
})

test('Handles spaces', () => {
    expect(casesarCipher('defend me', 1)).toBe('efgfoe nf')
})

test('Handles z', () => {
    expect(casesarCipher('about', -1)).toBe('zants')
})