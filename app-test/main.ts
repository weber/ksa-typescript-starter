import {MyClass } from '../src/lib/my-class'


const instance: MyClass = new MyClass()

console.log(instance)
interface IRec {
  a: number
  b: number
  result: number
}

type list = 'a'
type lll = list extends keyof IRec ? keyof IRec : list

const mt: lll = 'a'


let my: keyof IRec = 'a'

console.log(my, mt)
const testCases: Array<IRec> = [
  { a: 10, b: 3, result: 3.33 },
  { a: 10, b: 6, result: 1.67 },
  { a: 10, b: 7, result: 1.43 },
]

testCases.forEach(({ a, b, result }: IRec) => {
  console.log(a, b, result)
})

/*
type Proxy<T> = {
  get: () => T
  set: (value: T) => void
}*/

/*
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
*/

/*
function proxify<T> (o: T): Proxify<T> {
  return {
    get = (): void => {
      o.rooms
    },
    set = (v: unknown): void => {
      o.rooms = v
    }
  }
}

let properties = { rooms: 4 }
let proxyProperties = proxify(properties)*/


import { fromEvent } from 'rxjs'
import { scan } from 'rxjs/operators'

const INCREMENT_NUMBER: number = 2
const START_INCREMENT_NUMBER: number = 0
fromEvent(document, 'click')
  .pipe(
    scan((count: number) => count + INCREMENT_NUMBER, START_INCREMENT_NUMBER)
  )
  .subscribe((count: number) => console.log(`Clicked ${count} times`))
