export default function miniMaxSum(arr: number[]): number[] {

  if(arr.length < 2) {
    console.log(arr[0],arr[0])
    return [arr[0], arr[0]]
  }

  const sum:number = arr.reduce((a,b) => {return a + b})
  const minNumber:number = arr.reduce((a,b) => {return Math.min(a,b)})
  const maxNumber:number = arr.reduce((a,b) => {return Math.max(a,b)})

  console.log(sum - maxNumber, sum - minNumber)

  return [sum - maxNumber, sum - minNumber]
}
