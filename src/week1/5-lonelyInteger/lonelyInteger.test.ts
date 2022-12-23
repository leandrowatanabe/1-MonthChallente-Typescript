import {describe, expect, test} from '@jest/globals'
import lonelyInteger from './lonelyInteger'

describe('lonely time function', () => {
  test('Presents the result for morning time', () => {
    const input = [1]
    const output = 1

    const result = lonelyInteger(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const input = [1, 1]
    const output = 0

    const result = lonelyInteger(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const input = [1, 1, 2]
    const output = 2

    const result = lonelyInteger(input)

    expect(result).toStrictEqual(output)
  })


})
