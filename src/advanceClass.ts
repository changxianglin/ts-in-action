abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

// let animal = new Animal() eßrror

class Dogs extends Animal {
  constructor (name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}

let dog2 = new Dogs('wangwang')
dog2.eat()
dog2.sleep()

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}

let cat = new Cat()

let animal: Animal[] =[dog2, cat]
animal.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

new MyFlow().next().step1().next().step2()