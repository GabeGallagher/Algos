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

module.exports = {
  createArray,
  TreeNode,
  buildBST,
};