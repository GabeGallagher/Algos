export default class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  hasNoChildren() {
    return this.left === null && this.right === null;
  }

  isFull() {
    return this.left !== null && this.right !== null;
  }

  toArray() {
    const array = [];
    const queue = [this];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      array.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
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
