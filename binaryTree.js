import TreeNode from "./tree.js";
import Sort from "./sorting.js";

export default class BinaryTree {
  buildBinaryTree(array) {
    if (array.length === 0) return null;
    let root = new TreeNode(array[0]);
    let currentNode = root;
    let queue = [];
    for (let i = 1; i < array.length; i++) {
      currentNode = this.insertTreeNode(currentNode, array, i, queue);
    }
    return root;
  }

  insertTreeNode(currentNode, array, i, queue) {
    if (currentNode === null) currentNode = queue.shift();
    else if (i % 2 === 1) {
      if (array[i] !== null) {
        currentNode.left = new TreeNode(array[i]);
        queue.push(currentNode.left);
      }
    } else {
      if (array[i] !== null) {
        currentNode.right = new TreeNode(array[i]);
        queue.push(currentNode.right);
      }
      currentNode = queue.shift();
    }
    return currentNode;
  }

  buildMaxHeap(array) {
    let root = this.buildBinaryTree(array);
    this.maxHeapify(root);
    return root;
  }

  maxHeapify(treeNode) {
    if (treeNode.left !== null && treeNode.right !== null) {
      this.maxHeapify(treeNode.left);
      this.maxHeapify(treeNode.right);

      if (
        treeNode.left.val > treeNode.val ||
        treeNode.right.val > treeNode.val
      ) {
        if (treeNode.left.val > treeNode.right.val) {
          this.heapSwap(treeNode.left, treeNode);
        } else {
          this.heapSwap(treeNode.right, treeNode);
        }
      }
    } else if (treeNode.left !== null) {
      if (treeNode.left.val > treeNode.val) {
        this.heapSwap(treeNode.left, treeNode);
      }
    }
  }

  heapSwap(nodeGoingUp, nodeGoingDown) {
    let temp = nodeGoingUp.val;
    nodeGoingUp.val = nodeGoingDown.val;
    nodeGoingDown.val = temp;
    if (nodeGoingUp.val > nodeGoingDown.val) this.minHeapify(nodeGoingDown);
    else this.maxHeapify(nodeGoingDown);
  }

  buildMinHeap(array) {
    let root = this.buildBinaryTree(array);
    this.minHeapify(root);
    return root;
  }

  minHeapify(treeNode) {
    if (treeNode.left !== null && treeNode.right !== null) {
      this.minHeapify(treeNode.left);
      this.minHeapify(treeNode.right);

      if (
        treeNode.left.val < treeNode.val ||
        treeNode.right.val < treeNode.val
      ) {
        if (treeNode.left.val > treeNode.right.val) {
          this.heapSwap(treeNode.right, treeNode);
        } else {
          this.heapSwap(treeNode.left, treeNode);
        }
      } else if (treeNode.left !== null) {
        if (treeNode.left.val < treeNode.val) {
          this.heapSwap(treeNode.left, treeNode);
        }
      }
    }
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
}
