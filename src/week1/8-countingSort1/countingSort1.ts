export default function countingSort(arr: number[]): number[] {
  const highestNumber = Math.max(...arr)
  const frequencies:Array<number[]> = []

  for(let i = 0; i <= highestNumber; i++){
    frequencies.push(arr.filter(element => {return i === element}))
  }

  const result = frequencies.map(element => {return element.length})

  return result
}
