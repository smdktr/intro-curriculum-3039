'use strict';
const fs = require('fs');
const fileName = './test-promise.txt';

// Promise のみを利用する
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
function main() {
  let promiseChain = Promise.resolve();
  for (let count = 0; count < 100; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます。\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんにちは。\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんばんは。\n');
      });
  }
}
main();