import $ from 'jquery'

$('.app').css('color', 'red')

// globalLib({ x: 1 })
// globalLib.doSomething()

// import moduleLib from './module-lib'
// moduleLib.doSomething()

// import umbLib from './umd-lib'
// umbLib.doSomething()

import m from 'moment'

declare module 'moment' {
  export function myFunction(): void
}

m.myFunction = () => {

}

declare global {
  namespace globalLib {
    function doAnything(): void
  }
}

globalLib.doAnything = () => {}