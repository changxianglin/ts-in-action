class Log1<T> {
  run(value: T){
    console.log(value)
    return value
  }
}

let log1 = new Log1<number>()
log1.run(1)

let log2 = new Log1()
log2.run('1')

interface Length {
  length: number
}

function log3<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
log3([1])
log3('123')
log3({length: 1})