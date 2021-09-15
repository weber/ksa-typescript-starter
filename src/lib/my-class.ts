export class MyClass {
  #title: string = ''

  constructor () {}

  /**
   * getter title
   *
   * @returns {string} title
   */
  get title (): string {
    return this.#title
  }

  /**
   * setter title
   *
   * @param {string} title текст заголовка
   */
  set title (title: string) {
    this.#title = title
  }

  /**
   * someMethod
   *
   * @deprecated
   */
  someMethod (): void {
    console.log('someMethod()')
  }
}
