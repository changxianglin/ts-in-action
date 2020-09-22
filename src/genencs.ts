function log<T>(value: T): T {
  console.log(value)
  return value
}

log<String[]>(['a', 'b'])
log(['a', 'b'])

// type Log = <T>(value: T) => T
// let Mylog: Log = log

interface Log<T = String> {
  <T>(value: T): T
}

let myLog: Log = log
myLog(1)