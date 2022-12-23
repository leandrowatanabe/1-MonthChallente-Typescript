export default function lonelyinteger(a: number[]): number {
  const ocurrencys:Array<number[]> = []
  const result:number[] = []

  for(let i = 0; i < a.length; i++){
    ocurrencys.push(a.filter(element => {return element === a[i]}))
    result[i] = ocurrencys[i].length
  }

  const index = result.indexOf(1)

  return index < 0 ? 0 : a[index]

}
