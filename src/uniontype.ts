interface DogInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

let pet: DogInterface & CatInterface = {
  run() { },
  jump() { },
}

let a: number | string = 'a'

let b: 'a' | 'b' | 'c'

let c: 1 | 2 | 3

class Dogu implements DogInterface {
  run() { }
  eat() {}
}

class Catu implements CatInterface {
  jump() {}
  eat() {}
}

enum Master { Boy, Girl }

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dogu() : new Catu()
  pet.eat()
  // pet.run()
  return pet
}

interface Squareu {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  r: number
}

type Shape = Squareu | Rectangle | Circle

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.height * s.width
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => { throw new Error(e) })(s);
      }
}


console.log(area({ kind: 'circle', r: 1 }))