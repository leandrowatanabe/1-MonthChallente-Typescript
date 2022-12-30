export default function twoArrays(k: number, A: number[], B: number[]): string {
  const sortedA = A.sort((a,b) => {return a - b})
  const sortedB = B.sort((a,b) => {return b - a})
  const summedElements = sortedA.map((element, index) => {return element + sortedB[index]})
  const result = summedElements.filter(element => {return element >= k })

  return result.length === A.length ? 'YES' : 'NO'
}
