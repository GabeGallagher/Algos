export default class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  isEmpty() {
    return this.left === null && this.right === null;
  }

  isFull() {
    return this.left !== null && this.right !== null;
  }

  toArray(currentNode, array) {
    if (currentNode === undefined) {
      array = new Array();
      currentNode = this;
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
