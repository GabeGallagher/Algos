import TreeNode from "./tree.js";
import Sort from "./sorting.js";

export default class BinaryTree {
  buildBinaryTree(array) {
    let root = new TreeNode(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.insertTreeNode(root, array, i);
    }
    return root;
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
    let root = this.buildBinaryTree(array);
    this.heapify(root);
    return root;
  }

  heapify(treeNode) {
    //node has 2 child nodes and
    if (treeNode.left !== null && treeNode.right !== null) {
      this.heapify(treeNode.left);
      this.heapify(treeNode.right);
      // both child nodes are larger than parent
      if (
        treeNode.left.val > treeNode.val &&
        treeNode.right.val > treeNode.val
      ) {
        if (treeNode.left.val > treeNode.right.val) {
            this.heapSwap(treeNode.left, treeNode);
        //   let temp = treeNode.left.val;
        //   treeNode.left.val = treeNode.val;
        //   treeNode.val = temp;
        } else {
            this.heapSwap(treeNode.right, treeNode);
        //   let temp = treeNode.right.val;
        //   treeNode.right.val = treeNode.val;
        //   treeNode.val = temp;
        }
      }
      // one child node is larger than parent and sibling
      else if (
        treeNode.left.val > treeNode.val ||
        treeNode.right.val > treeNode.val
      ) {
        if (treeNode.left.val > treeNode.right.val) {
            this.heapSwap(treeNode.left, treeNode);
        //   let temp = treeNode.left.val;
        //   treeNode.left.val = treeNode.val;
        //   treeNode.val = temp;
        } else {
            this.heapSwap(treeNode.right, treeNode);
        //   let temp = treeNode.right.val;
        //   treeNode.right.val = treeNode.val;
        //   treeNode.val = temp;
        }
      }
    }
    // node has 1 child node
    else if (treeNode.left !== null) {
      if (treeNode.left.val > treeNode.val) {
        this.heapSwap(treeNode.left, treeNode);
        // let temp = treeNode.val;
        // treeNode.val = treeNode.left.val;
        // treeNode.left.val = temp;
      }
    }
  }

  heapSwap(nodeGoingUp, nodeGoingDown) {
    let temp = nodeGoingUp.val;
    nodeGoingUp.val = nodeGoingDown.val;
    nodeGoingDown.val = temp;
    this.heapify(nodeGoingDown);
  }

  buildMinHeap(array) {
    let sorter = new Sort();
    return this.buildBinaryTree(sorter.merge(array));
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

// let maxHeap = new BinaryTree().buildMaxHeap([5, 12, 64, 1, 37, 90, 91, 97]);
// console.log(maxHeap.toString());
