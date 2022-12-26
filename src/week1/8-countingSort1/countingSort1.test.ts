import {describe, expect, test} from '@jest/globals'
import countingSort1 from './countingSort1'

describe('lonely time function', () => {
  test('Presents the result for the integer 1', () => {
    const input = [1]
    const output = [0, 1]

    const result = countingSort1(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for two integer 1 and one number 2', () => {
    const input = [1, 1, 2]
    const output = [0, 2, 1]

    const result = countingSort1(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for the array [0, 1, 2]', () => {
    const input = [1, 1, 3, 2, 1]
    const output = [0, 3, 1, 1]

    const result = countingSort1(input)

    expect(result).toStrictEqual(output)
  })

})
