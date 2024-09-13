const { createArray, TreeNode, buildBST } = require("./BinarySearchTree");
const BinSearch = require("./binSearch");
const Sort = require("./sorting");

let a = createArray(10, -100, 100);
// let search = new BinSearch();
// let a = [18, -82, -66, -88, -83, 26, 67, -59, -63, 9];

console.log(a.toString());
let sorter = new Sort();
sorter.bubble(a);
console.log(a.toString());
