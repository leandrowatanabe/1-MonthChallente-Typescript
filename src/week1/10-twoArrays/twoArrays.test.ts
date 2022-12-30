import {describe, expect, test} from '@jest/globals'
import twoArrays from './twoArrays'

describe('lonely time function', () => {
  test('Presents the result for matching arrays with single element 0 and zero sum', () => {
    const arrayZero = [0]
    const k = 0
    const output = 'YES'

    const result = twoArrays(k, arrayZero, arrayZero)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for matching arrays with single element 0 and 1 sum', () => {
    const arrayZero = [0]
    const k = 1
    const output = 'NO'

    const result = twoArrays(k, arrayZero, arrayZero)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for two arrays and sum that matches the criteria', () => {
    const arrayA = [2, 1, 3]
    const arrayB = [7, 8, 9]
    const k = 10
    const output = 'YES'

    const result = twoArrays(k, arrayA, arrayB)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for two arrays and sum that doesnt matches the criteria', () => {
    const arrayA = [1, 2, 2, 1]
    const arrayB = [3, 3, 3, 4]
    const k = 5
    const output = 'NO'

    const result = twoArrays(k, arrayA, arrayB)

    expect(result).toStrictEqual(output)
  })
})
