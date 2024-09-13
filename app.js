const { createArray, TreeNode, buildBST } = require("./BinarySearchTree");
const BinSearch = require("./binSearch");
const Sort = require("./sorting");

let a = createArray(10, -100, 100);
// let search = new BinSearch();
// let a = [-23,-59,-43,78,77,-75,-16,-58,25,-61];

console.log(a.toString());
let sorter = new Sort();
sorter.bubble(a);
console.log(a.toString());
