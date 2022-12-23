export default function plusMinus(arr: number[]): string[] {
  let positiveFrequency:number[] = arr.filter(element => {return element > 0 })
  let negativeFrequency:number[] = arr.filter(element => {return element < 0 })
  let zeroFrequency:number[] = arr.filter(element => {return element === 0 })

  const result = [
    (positiveFrequency.length/arr.length).toFixed(6),
    (negativeFrequency.length/arr.length).toFixed(6),
    (zeroFrequency.length/arr.length).toFixed(6)
  ]

  console.log(`${(positiveFrequency.length/arr.length).toFixed(6)}\n${(negativeFrequency.length/arr.length).toFixed(6)}\n${(zeroFrequency.length/arr.length).toFixed(6)}`)

  return result
}
