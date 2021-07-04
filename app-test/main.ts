import {MyClass } from 'src/lib/my-class'


const instance: MyClass = new MyClass()

console.log(instance)
interface IRec {
  a: number
  b: number
  result: number
}
const testCases: Array<IRec> = [
  { a: 10, b: 3, result: 3.33 },
  { a: 10, b: 6, result: 1.67 },
  { a: 10, b: 7, result: 1.43 },
]


testCases.forEach(({ a, b, result }: IRec) => {
  console.log(a, b, result)
})
