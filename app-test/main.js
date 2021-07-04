import { MyClass } from '../src/lib/my-class';
const instance = new MyClass();
console.log(instance);
const testCases = [
    { a: 10, b: 3, result: 3.33 },
    { a: 10, b: 6, result: 1.67 },
    { a: 10, b: 7, result: 1.43 },
];
testCases.forEach(({ a, b, result }) => {
    console.log(a, b, result);
});
//# sourceMappingURL=main.js.map