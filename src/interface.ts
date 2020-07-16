interface List {
  readonly id: number;
  name: string;
  age?: number;
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}

let result = {
  data: [
    {id: 1, name: 'A'},
    {id: 2, name: 'B', age: 2}
  ]
}

render(result)

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: any;
  // y: number
  [z: number]: number;
}



