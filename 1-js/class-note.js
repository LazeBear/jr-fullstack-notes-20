// Mason
// Canva

// EcmaScript (ES)
// JS 标准版
// ES5 (2009)
// ES6 (2015)
// ES7 (2016)
// ES8 (2017)

// 块级作用域

const obj = {}; // Object literal

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// value
// reference, value
// primitive data type

// strict mode

obj = {};

const one = 1;

const array = [one, { a: 1 }];

// asynchronous 异步
// event loop

// thread 线程
// single thread 单线程 -> JS

// Exectution context 执行上下文
// call stack 调用栈
// garbage collection 垃圾回收

// scope chain 作用域链

var arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 1000);
}

// var
// [
//   i: 4
// ]

// let
// [
//   i: 0,
// ]
// [
//   i: 1,
// ]
// [
//   i: 2,
// ]
// [
//   i: 3,
// ]

// 模版字符串
// back tick
// 数字1左边的键 ` '

// 延展运算符

// immutable, mutable
// state management

// 解构

// function logInfo(opts) {
//   console.log(`Name: ${opts.name}, Age: ${opts.age}`);
//   console.log('Other Info:', opts.other);
// }

// high order component

// currying function

// ternary operator 三元运算符
const add = (x, y) => {
  return x > y ? x + y : x - y;
};
const add = (x, y) => {
  if (x > y) {
    return x + y;
  }
  return x - y;
};
// equals
const add = (x, y) => (x > y ? x + y : x - y); // maintability
const add = (x, y) => x + y;

// annomous function 匿名函数

// shallow copy 浅拷贝 deep copy 深拷贝

const obj = { name: 'will', age: '22', sex: 'm' };

const obj2 = { ...obj, location: 'brisbane' };

// lexical scope 词法作用域
// static scope 静态作用域

function foo() {
  const number = 1;
  return () => {
    console.log(number);
  };
}
const number = 100;
// const bar = foo();
// bar();
foo()(); // 1

const number = 1;
function foo() {
  console.log(number);
}
function bar(fn) {
  const number = 2;
  fn();
}
bar(foo); // 1

function bar(fn) {
  const number = 2;
  console.log(number);
}

// prototype chain

// module 模块

var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  var a = f();
  return a;
}
checkscope();
