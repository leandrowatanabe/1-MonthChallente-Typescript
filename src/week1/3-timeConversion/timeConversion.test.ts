import {describe, expect, test} from '@jest/globals'
import timeConversion from './timeConversion'

describe('time conversion function', () => {
  test('Presents the result for morning time', () => {
    const input = '07:05:45AM'
    const output = '07:05:45'

    const result = timeConversion(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for noon time', () => {
    const input = '07:05:45PM'
    const output = '19:05:45'

    const result = timeConversion(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for 12:00:00PM', () => {
    const input = '12:00:00PM'
    const output = '12:00:00'

    const result = timeConversion(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for 12:00:00AM', () => {
    const input = '12:00:00AM'
    const output = '00:00:00'

    const result = timeConversion(input)

    expect(result).toStrictEqual(output)
  })
})
