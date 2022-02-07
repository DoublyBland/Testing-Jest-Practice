const analyzeArray = require('./analyzeArray')

test('Should return average, min, max, and length', () => {
    expect(analyzeArray([5,14,6,2,4,5])).toEqual({
        average: 6,
        max: 14,
        min: 2,
        length: 6
    })
})