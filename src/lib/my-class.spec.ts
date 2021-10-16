
import '../../config/testSetup'

import {MyClass} from './my-class'



let instance: MyClass = new MyClass()

describe('my-clss', () => {
  beforeEach(() => {
    instance = new MyClass()
  })
  it('должен существовать', () => {
    expect([]).toEqual(expect.toBeArray())
    expect(instance).toBeTruthy()
  })

  it('prepareData', () => {
    let parameter1: number = 2
    let parameter2: number = 3
    let summa: number = 5

    expect(instance.prepareData(parameter1, parameter2)).toEqual(summa)
  })

  it('get title', () => {
    expect(instance.title).toEqual('')
  })

  it('set title', () => {
    instance.title = 'hello'
    expect(instance.title).toEqual('hello')
  })

  it('должен my', () => {
    expect(instance.my()).toEqual('hello')
  })
})
