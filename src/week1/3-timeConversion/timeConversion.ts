export default function timeConversion(s: string): string {
  const splitedString = s.split(':')
  let hours:number = 0

  if(s[8] === 'P'  && +splitedString[0] === 12){
    return s.split('P')[0]
  } else if (s[8] === 'A'  && +splitedString[0] === 12) {
    hours = 0
  } else if(s[8] === 'P' && +splitedString[0] < 12){
    hours = +splitedString[0] + 12
  } else {
    hours = +splitedString[0]
  }

  return `${hours > 10 ? hours : `0${hours}`}:${splitedString[1]}:${splitedString[2][0]}${splitedString[2][1]}`
}
