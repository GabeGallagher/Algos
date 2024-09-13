const { createArray, TreeNode, buildBST } = require("./BinarySearchTree");
const BinSearch = require("./binSearch");
const Sort = require("./sorting");

// let a = createArray(10, -100, 100);
let search = new BinSearch();
let a = [-23, -59, -43, 78, 77, -75, -16, -58, 25, -61];
let sort = new Sort();
a = sort.bubble(a);

console.log(search.search(a, 77));
