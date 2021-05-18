export let a = 1

let b = 2
let c = 3

export { b, c }

export interface P {
  x: number
  y: number
}

export function f() {
  
}

function g() {
  
}

export { g as G }

export default function () {
  console.log("I'm default")
}

export { str as hello } from './b'