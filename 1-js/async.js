// callback function

function fetch(callback) {
  setTimeout(() => {
    callback('hello');
  }, 1000);
}

// callback hell
fetch((data) => {
  console.log(data);
  fetch((data) => {
    console.log(data);
    fetch((data) => {
      console.log(data);
      fetch((data) => {
        console.log(data);
      });
    });
    fetch((data) => {
      console.log(data);
    });
  });
});

// Promise
// 3种状态
// pending, fulfilled, rejected
// promise -> pending
// pending -> fulfilled
// pending -> rejected
// fulfilled -> rejected x
// rejected -> fulfilled x

// fulfilled -> pending x (create a new promise)
function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
      // reject('error')
    }, 1000);
  });
}

fetchPromise()
  .then((result) => {
    console.log(1, result);
    return 1;
  })
  // promise chain
  .then((result) => {
    console.log(2, result);
    // result = 1;
    return 2;
  })
  .then((result) => {
    console.log(3, result);
    // result = 2;
    return 3;
  })
  .catch((error) => {
    // throw error
    return Promise.reject(error);
  })
  .catch((error) => {
    console.log('error', error);
  });

// async/await
// syntax sugar 语法糖
// 本质上还是promise
async function foo() {
  try {
    // try {
    const result = await fetchPromise();
    // const result = await anotherPromise();
    // } catch (e) {}
    // try {
    const result2 = await Promise.resolve(1);
    // } catch (e) {}
    const result3 = await Promise.resolve(2);
  } catch (error) {}
}

async function anotherPromise() {
  try {
    const result = await fetchPromise();
  } catch (e) {}
}

// (async function () {
//   await fetchPromise();
// })();

fetchPromise()
  .then((result) => {
    console.log(1, result);
    return 1;
  })
  .then((result) => {
    console.log(2, result);
    // result = 1;
    return 2;
  })
  .catch((e) => {
    console.log(e);
  });

(async function () {
  try {
    const result = await fetchPromise();
    console.log(1, result);
    const result2 = await Promise.resolve(1);
    console.log(2, result2);
    // await Promise.resolve(2);
  } catch (e) {
    console.log(e);
  }
})();

function anotherFetch(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function foo() {
  try {
    const result = await fetchPromise([1, 2]);
    console.log(1, result);
    const result2 = await fetchPromise(result);
    return result2;
  } catch (e) {
    console.log(e);
  }
}

(async function () {
  const result = await foo();
  console.log(result);
})();

// callback queue (macrotask queue)
// promise queue (microtask queue) (higher priority)
