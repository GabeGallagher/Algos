function createArray(n, lb, ub) {
  let out = [];
  for (let i = 0; i < n; i++) {
    out.push(Math.floor(Math.random() * (ub - lb + 1)) + lb);
  }
  return out;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  setVal(val) {
    this.val = val;
  }

  setLeft(treeNode) {
    this.left = treeNode;
  }

  setRight(treeNode) {
    this.right = treeNode;
  }
}

function buildBST(array) {
  let root = new TreeNode(array[0]);
  for (let i = 1; i < array.length; i++) {
    insertNode(root, array, i);
  }
}

function insertNode(currentNode, array, i) {
  if (array[i] < currentNode.val) {
    if (currentNode.left === null)
      currentNode.left = new TreeNode(array[i]);
    else
      insertNode(currentNode.left, array, i);
  }
  else {
    if (currentNode.right === null)
      currentNode.right = new TreeNode(array[i]);
    else
      insertNode(currentNode.right, array, i);
  }
}

// let a = createArray(10, -100, 100);
let a = [18, -82, -66, -88, -83, 26, 67, -59, -63, 9];
buildBST(a);
// a.sort((x, y) => x - y);
