const { createArray, TreeNode, buildBST } = require('./BinarySearchTree');

// let a = createArray(10, -100, 100);
let a = [18, -82, -66, -88, -83, 26, 67, -59, -63, 9];
buildBST(a);
// a.sort((x, y) => x - y);