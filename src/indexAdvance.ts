let obj = {
  a: 1,
  b: 2,
  c: 3,
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][]  {
  return keys.map(key => obj[key])
}

// console.log(getValues(obj, ['a', 'b']))
// console.log(getValues(obj, ['e', 'f']))

interface Obj {
  a: number
  b: string
}

let key: keyof Obj

let value: Obj['a']

