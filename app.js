const BinaryTree = require("./tree");
const BinSearch = require("./binSearch");
const Sort = require("./sorting");

function createArray(n, lb, ub) {
  let out = [];
  for (let i = 0; i < n; i++) {
    out.push(Math.floor(Math.random() * (ub - lb + 1)) + lb);
  }
  return out;
}

// let a = createArray(10, -100, 100);
let a = [2, 6, 5, 3, 8, 7, 1, 0];
let sorting = new Sort();
console.log(sorting.quick(a).toString());
