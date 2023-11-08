function sum(a, b) {
  return a + b;
}

// const sum = require('./sum')

// string -> h1
describe('sum function', () => {
  // test cases
  it('should return correct sum of two numbers', () => {
    // setup (intailize - variables, mock)

    // execute the function (target)
    const result = sum(1, 2);
    // compare
    // result === 3
    expect(result).toBe(3);
  });

  // test('',()=>{})

  // h2
  describe('another test', () => {
    it('should return correct sum of two numbers', () => {
      // setup (intailize - variables, mock)

      // execute the function (target)
      const result = sum(1, 2);
      // compare
      // result === 3
      expect(result).toBe(3);
    });
  });
});

// test case 测试用例

// test -> decription
// test - independent
// A,B

// check if feature works as expected
// expect return/actual value == expected value

// why testing
// time consuming - 2x, 5x of dev time

// TDD test driven development
