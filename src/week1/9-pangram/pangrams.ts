export default function pangrams(s: string): string {
  const result = new Set(s.toLowerCase().match(/[a-z]/g))

  return result.size === 26 ? 'pangram' : 'not pangram'
}
