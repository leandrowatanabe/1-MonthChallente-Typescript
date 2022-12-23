export default function plusMinus(arr: number[]): string[] {
  let positiveFrequency:number = 0
  let negativeFrequency:number = 0
  let zeroFrequency:number = 0

  for (let i = 0; i < arr.length; i++){
      if(arr[i] === 0) {
          zeroFrequency += 1
      } else if(arr[i] < 0) {
          negativeFrequency += 1
      } else {
          positiveFrequency += 1
      }
  }
  const result = [
    (positiveFrequency/arr.length).toFixed(6),
    (negativeFrequency/arr.length).toFixed(6),
    (zeroFrequency/arr.length).toFixed(6)
  ]

  console.log(`${(positiveFrequency/arr.length).toFixed(6)}\n${(negativeFrequency/arr.length).toFixed(6)}\n${(zeroFrequency/arr.length).toFixed(6)}`)

  return result
}
