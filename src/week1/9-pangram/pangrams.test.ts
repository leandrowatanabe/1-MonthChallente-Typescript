import {describe, expect, test} from '@jest/globals'
import pangrams from './pangrams'

describe('lonely time function', () => {
  test('Presents the result for a pangram string', () => {
    const input = 'We promptly judged antique ivory buckles for the next prize'
    const output = 'pangram'

    const result = pangrams(input)

    expect(result).toStrictEqual(output)
  })

  test('Presents the result for a not pangram string', () => {
    const input = 'We promptly judged antique ivory buckles for the prize'
    const output = 'not pangram'

    const result = pangrams(input)

    expect(result).toStrictEqual(output)
  })

})
