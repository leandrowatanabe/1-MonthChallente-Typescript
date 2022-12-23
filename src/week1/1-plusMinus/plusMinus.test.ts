import {describe, expect, test} from '@jest/globals'
import plusMinus from './plusMinus'

describe('plus minus function', () => {
  test('Presents the frequency for one occurrency of 0', () => {
    const input = [0]
    const output = ['0.000000','0.000000', '1.000000']

    const result = plusMinus(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the frequency for one occurrency of 1', () => {
    const input = [1]
    const output = ['1.000000','0.000000', '0.000000']

    const result = plusMinus(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the frequency for one occurrency of -1', () => {
    const input = [-1]
    const output = ['0.000000','1.000000', '0.000000']

    const result = plusMinus(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the frequency for one occurrency for each case (-1, 0, 1)', () => {
    const input = [-1, 0, 1]
    const output = ['0.333333','0.333333', '0.333333']

    const result = plusMinus(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the frequency of an array with more numbers', () => {
    const input = [1, 2, 3, -1, -2, -3, 0, 0]
    const output = ['0.375000', '0.375000' ,'0.250000']

    const result = plusMinus(input)

    expect(result).toStrictEqual(output)
  })

})
