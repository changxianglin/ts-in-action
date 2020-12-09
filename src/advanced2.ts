// // let s:string = 'a'
// // s = null

// interface X {
//   a: any;
//   b: any;
// }

// interface Y {
//   a: any
//   b: any
//   c: any
// }

// let x1: X = {a: 1, b: 2}
// let y: Y = {a: 1, b: 2, c: 3}
// x1 = y
// // y = x1

// type Handler = (a: number, b: number) => void
// function hof(handler: Handler) {
//   return handler
// }

// let handler1 = (a: number) => {}
// hof(handler1)

// let handler2 = (a: number, b: number, c: number) => {}
// // hof(handler2)

// let aa1 = (p1: number, p2: number) => {}
// let aa2 = (p1?: number, p2?: number) => {}
// let aa3 = (...args: number[]) => {}
// aa1 = aa2
// aa1 = aa3
// // aa2 = aa3
// // aa2 = aa1
// aa3 = aa1
// aa3 = aa2

// let handler3 = (a: string) => {}
// // hof(handler3)

// interface Point2D {
//   x: number
//   y: number
// }

// interface Point3D {
//   x: number
//   y: number
//   z: number
// }

// let p3d = (point: Point3D) => {}
// let p2d = (point: Point2D) => {}
// p3d = p2d
// // p2d = p3d

// let f = () => ({name: 'Alice'})
// let g = () => ({name: 'Alice', location: 'Canton'})
// f = g
// // g = f

// function overload(a: number, b: number): number
// function overload(a: string, b: string): string
// function overload(a: any, b: any): any {}

// enum Fruit {Apple, Banana}
// enum Color {Red, Yellow}
// let fruit: Fruit.Apple = 3
// let no: number = Fruit.Apple
// // let color: Color.Red = Fruit.Apple

// class A {
//   constructor(p: number, q: number) {}
//   id: number = 1
//   private name: string = ''
// }

// class B {
//   static s = 1
//   constructor(p: number) {}
//   id: number = 2
//   private name: string = ''
// }

// let aa = new A(1, 2)
// let bb = new B(1)
// // aa = bb
// // bb = aa

// class C2 extends A{}
// let cc2 = new C2(1, 2)
// aa = cc2
// cc2 = aa

// interface Empty<T> {
//   value: T
// }
// // let obj1: Empty<number> = {}
// // let obj2: Empty<string> = {}
// // obj1 = obj2

// let loga1 = <T>(x: T): T => {
//   console.log('x')
//   return x
// }

// let loga2 = <U>(y: U): U => {
//   console.log('y')
//   return y
// }

// loga1 = loga2

// // 结构之间兼容：成员少的兼容成员多的
// // 函数之间兼容：参数多的兼容参数少的