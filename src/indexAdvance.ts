let objA = {
  a: 1,
  b: 2,
  c: 3,
}

function getValues<T, K extends keyof T>(objA: T, keys: K[]): T[K][]  {
  return keys.map(key => objA[key])
}

// console.log(getValues(obj, ['a', 'b']))
// console.log(getValues(obj, ['e', 'f']))

interface ObjB {
  a: number
  b: string
}

let key: keyof ObjB

let value: ObjB['a']

