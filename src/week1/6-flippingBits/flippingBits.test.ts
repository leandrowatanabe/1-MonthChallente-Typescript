import {describe, expect, test} from '@jest/globals'
import flippingBits from './flippingBits'

describe('lonely time function', () => {
  test('Presents the result for the integer 1', () => {
    const input = 1
    const output = 4294967294

    const result = flippingBits(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for the integer 3', () => {
    const input = 3
    const output = 4294967292

    const result = flippingBits(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for the integer 2147483647', () => {
    const input = 2147483647
    const output = 2147483648

    const result = flippingBits(input)

    expect(result).toStrictEqual(output)
  })

})
