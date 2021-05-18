interface A {
  x: number
  // y: string
  foo(bar: number): number
  foo(bar: 'a'): number
}

interface A {
  y: number
  foo(bar: string): string
  foo(bar: number): number[]
  foo(bar: 'b'): number
}

let aa: A = {
  x: 1,
  y: 1,
  foo(bar: any) {
    return bar
  }
}

function Lib() {
  
}

namespace Lib {
  export let version = '1.0'
}

console.log(Lib.version)

class CC { }
namespace CC {
  export let state = 1
}
console.log(CC.state)

enum Color {
  Red,
  Yellow,
  Bule,
}

namespace Color {
  export function mix() {}
}

console.log(Color)