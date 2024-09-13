const Sort = require("./sorting");

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  setLeft(treeNode) {
    this.left = treeNode;
  }

  setRight(treeNode) {
    this.right = treeNode;
  }

  isEmpty() {
    return this.left === null && this.right === null;
  }

  isFull() {
    return this.left !== null && this.right !== null;
  }
}

class BinaryTree {
  buildTree(array) {
    let root = new TreeNode(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.insertTreeNode(root, array, i);
    }
  }

  insertTreeNode(currentNode, array, i) {
    if (currentNode.isEmpty() === true) {
      currentNode.left = new TreeNode(array[i]);
    } else if (!currentNode.isEmpty() && currentNode.right === null) {
      currentNode.right = new TreeNode(array[i]);
    } else if (currentNode.left.isFull() && !currentNode.right.isFull()) {
      this.insertTreeNode(currentNode.right, array, i);
    } else this.insertTreeNode(currentNode.left, array, i);
  }

  buildMaxHeap(array) {
    let sorter = new Sort();
    let tempArray = sorter.merge(array);
    let maxArray = [];
    for (let i = tempArray.length; i > 0; i--) {
      maxArray.push(tempArray[i]);
    }
    this.buildTree(maxArray);
  }

  buildMinHeap(array) {
    let sorter = new Sort(array);
    this.buildTree(sorter.merge(array));
  }

  buildBST(array) {
    let root = new TreeNode(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.insertBstNode(root, array, i);
    }
  }

  insertBstNode(currentNode, array, i) {
    if (array[i] < currentNode.val) {
      if (currentNode.left === null) currentNode.left = new TreeNode(array[i]);
      else this.insertBstNode(currentNode.left, array, i);
    } else {
      if (currentNode.right === null)
        currentNode.right = new TreeNode(array[i]);
      else this.insertBstNode(currentNode.right, array, i);
    }
  }
}

module.exports = BinaryTree;
