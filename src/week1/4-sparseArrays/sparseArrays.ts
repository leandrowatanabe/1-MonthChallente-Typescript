export default function sparseArrays(strings: string[], queries: string[]): number[] {

  const ocurrencys:Array<string[]> = []
  const result:number[] = []

  for(let i = 0; i < queries.length; i++){
    ocurrencys.push(strings.filter(element => {return element === queries[i]}))
    result[i] = ocurrencys[i].length
  }

  return result
}
