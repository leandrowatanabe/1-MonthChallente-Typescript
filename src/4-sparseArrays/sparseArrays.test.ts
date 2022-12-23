import {describe, expect, test} from '@jest/globals'
import sparseArrays from './sparseArrays'

describe('sparse arrays function', () => {
  test('Presents the result for morning time', () => {
    const strings = ['a']
    const queries = ['a']
    const output = [1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const strings = ['a', 'a']
    const queries = ['a']
    const output = [2]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const strings = ['a', 'b']
    const queries = ['a']
    const output = [1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const strings = ['a', 'b']
    const queries = ['a', 'b']
    const output = [1, 1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const strings = ['a', 'b', 'c']
    const queries = ['a', 'b']
    const output = [1, 1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const strings = ['ab', 'ab', 'abc']
    const queries = ['ab', 'abc', 'bc']
    const output = [2, 1, 0]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for morning time', () => {
    const strings = ['def', 'de', 'fgh']
    const queries = ['de', 'lmn', 'fgh']
    const output = [1, 0, 1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

})
