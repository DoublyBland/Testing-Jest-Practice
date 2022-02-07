const capitalize = require('./capitalize');

test('should capitalize name', () => {
    expect(capitalize('thomas')).toBe('Thomas');
});

test('Only does first word', () => {
    expect(capitalize('this is a test')).toBe('This is a test');
});