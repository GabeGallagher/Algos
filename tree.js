import Sort from "./sorting.js";

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

export default class BinaryTree {
  constructor(array) {
    this.root = new TreeNode(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.insertTreeNode(this.root, array, i);
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
    let sorter = new Sort();
    this.buildTree(sorter.merge(array));
  }

  buildBST(array) {
    this.root = new TreeNode(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.insertBstNode(this.root, array, i);
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

  toArray(currentNode, array) {
    if (currentNode === undefined) {
      array = new Array();
      currentNode = this.root;
      array.push(currentNode.val);
    }
    if (currentNode.left !== null) {
      array.push(currentNode.left.val);
    }
    if (currentNode.right !== null) {
      array.push(currentNode.right.val);
    }
    
    if (currentNode.left !== null) {
      this.toArray(currentNode.left, array);
    }
    if (currentNode.right !== null) {
      this.toArray(currentNode.right, array);
    }
    return array;
  }

  toString() {
    let array = this.toArray();
    let stringOut = "[";
    for (let i = 0; i < array.length; i++) {
      stringOut += `${array[i]}, `;
    }
    return `${stringOut.slice(0, -2)}]`;
  }
}
