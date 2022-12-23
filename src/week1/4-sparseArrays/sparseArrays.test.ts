import {describe, expect, test} from '@jest/globals'
import sparseArrays from './sparseArrays'

describe('sparse arrays function', () => {
  test('Presents the result one single string on the array and matching query', () => {
    const strings = ['a']
    const queries = ['a']
    const output = [1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for two strings with the same value on the array and matching query', () => {
    const strings = ['a', 'a']
    const queries = ['a']
    const output = [2]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for two strings and only one query', () => {
    const strings = ['a', 'b']
    const queries = ['a']
    const output = [1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for two strings and two queries that matches', () => {
    const strings = ['a', 'b']
    const queries = ['a', 'b']
    const output = [1, 1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for three strings and two queries', () => {
    const strings = ['a', 'b', 'c']
    const queries = ['a', 'b']
    const output = [1, 1]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for more complex strings and queries', () => {
    const strings = ['ab', 'ab', 'abc']
    const queries = ['ab', 'abc', 'bc']
    const output = [2, 1, 0]

    const result = sparseArrays(strings, queries)

    expect(result).toStrictEqual(output)
  })

})
