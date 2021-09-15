import {MyClass} from './my-class'

let instance: MyClass = new MyClass()

describe('my-clss', () => {
  beforeEach(() => {
    instance = new MyClass()
  })
  it('инстанс MyClass должен существовать', () => {
    expect(instance).toBeTruthy()
  })

  it('get title', () => {
    expect(instance.title).toEqual('')
  })

  it('set title', () => {
    instance.title = 'hello'
    expect(instance.title).toEqual('hello')
  })
})
