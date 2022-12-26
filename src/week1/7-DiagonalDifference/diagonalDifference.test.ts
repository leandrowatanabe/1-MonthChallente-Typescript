import {describe, expect, test} from '@jest/globals'
import diagonalDifference from './diagonalDifference'

describe('lonely time function', () => {
  test('Presents the result for the integer 1', () => {
    const input = [
      [1]
    ]
    const output = 0

    const result = diagonalDifference(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for square matrix of matching elements 1', () => {
    const input = [
      [1, 1],
      [1, 1]
    ]
    const output = 0

    const result = diagonalDifference(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for square matrix one different element', () => {
    const input = [
      [2, 1],
      [1, 1]
    ]
    const output = 1

    const result = diagonalDifference(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for bigger square matrix', () => {
    const input = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ]
    const output = 15

    const result = diagonalDifference(input)

    expect(result).toStrictEqual(output)
  })

})
