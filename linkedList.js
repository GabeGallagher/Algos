class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  constructor(array) {
    if (array.length === 0) return;
    
    this.val = array[0];
    this.next = null;
    let currentNode = this;
    for (let i = 1; i < array.length; i++) {
      let node = new ListNode(array[i]);
      currentNode.next = node;
      currentNode = node;
    }
  }

  toString() {
    if (!this.next) return "[ ]";
    let out = "[";
    let currentNode = this;
    while (currentNode.next) {
      out += `${currentNode.val}, `;
      currentNode = currentNode.next;
    }
    out += `${currentNode.val}]`;
    return out;
  }
}
