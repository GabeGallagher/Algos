const { createArray, TreeNode, buildBST } = require("./BinarySearchTree");
const { BinSearch } = require("./binSearch");

let a = createArray(10, -100, 100);
let search = new BinSearch();
// let a = [18, -82, -66, -88, -83, 26, 67, -59, -63, 9];

console.log(search.search(a, 6));
