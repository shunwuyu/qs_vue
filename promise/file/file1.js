const fs = require('fs');
// js是异步的， 回调
// node 异步无阻塞  性能，服务器需求
// 异步 同步
// 回调地狱
// fs.readFile('input.txt',
//  function (err,data) {
//    console.log(data.toString());
//    fs.readFile('input2.txt', function(err, data) {
//       console.log(data.toString());
//       fs.readFile('input3.txt', function(err, data) {
//         // .....
//         console.log(data.toString());
//       })
//    })
// });
function readFile1() {
  return new Promise((resolve, reject) => {
    fs.readFile('input.txt',
     (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}
function readFile2() {
  return new Promise((resolve, reject) => {
    fs.readFile('input2.txt',
     (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}
function readFile3() {
  return new Promise((resolve, reject) => {
    fs.readFile('input3.txt',
     (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}
readFile1()
  .then(data => {
    console.log(data.toString());
    return readFile2();
  })
  .then(data => {
    console.log(data.toString());
    return readFile3();
  })
  .then(data => {
    console.log(data.toString());
  })

