import {BehaviorSubject} from 'rxjs'


export interface IUserInfo {
  name: string
}
enum EFoo {
  SECOND = 10000
}


interface IT1 {
  func: (arg: string) => number
}
type T2 = {
  func: (arg: boolean) => void
}
// this is equivalent to the overload
interface IT3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void)
}

/**
 * Class MyClass что то делает
 */
export class MyClass {

  array2: Array<string> = []
  #title: string = ''
  props$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor () {
    this.props$
      .subscribe({
        next: (v: boolean) => console.log(v),
        error: (error: unknown) => console.error(error),
        // eslint-disable-next-line no-console
        complete: () => console.info('complete')
      })
  }

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
   * умножает парамтры между собой
   *
   * @param {number} x значение
   * @param {number} y значение
   * @returns {number} сумма
   */
   prepareData (x: number, y: number): number {
    return x + y
  }

  /**
   * выводит текст hello
   *
   * @returns {string} hello
   */
  my (): string {
    return 'hello'
  }

}
