import {describe, expect, test} from '@jest/globals'
import minMax from './minMax'

describe('min max sum function', () => {
  test('Presents the result for an array of a single element', () => {
    const input = [1]
    const output = [1,1]

    const result = minMax(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for max sum and min sum for two equal numbers', () => {
    const input = [1,1]
    const output = [1,1]

    const result = minMax(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for max sum and min sum for three equal numbers', () => {
    const input = [1,1,1]
    const output = [2,2]

    const result = minMax(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for max sum and min sum for two different numbers', () => {
    const input = [1,2]
    const output = [1,2]

    const result = minMax(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for max sum and min sum for three different numbers', () => {
    const input = [1,2,3]
    const output = [3,5]

    const result = minMax(input)

    expect(result).toStrictEqual(output)
  })
})
