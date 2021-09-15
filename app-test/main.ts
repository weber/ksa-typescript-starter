import {MyClass } from '../src/lib/my-class'


const instance: MyClass = new MyClass()

instance.title = 'hello world'

instance.someMethod()

console.log(instance.title)
