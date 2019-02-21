const { simpleArraySum } = require('./index')

describe('simpleArraySum()', () => {
  test('Given no arguments', () => {
    const actual = simpleArraySum()
    const expected = 0

    expect(actual).toBe(expected)
  })

  test('Given an array with values', () => {
    const values = [1, 2, 3, 4, 10, 11]

    const actual = simpleArraySum(values)
    const expected = 31

    expect(actual).toBe(expected)
  })
})
