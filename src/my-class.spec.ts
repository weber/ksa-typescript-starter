import { MyClass } from './my-class'

jest.mock('./environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}))

describe('MyClass проверка ', () => {
  let client: MyClass

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })



  it('параметр authUrl в конструкторе', () => {
    client = new MyClass()
    expect(client).toBeTruthy()
  })
})

