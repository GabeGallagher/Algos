class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  constructor(array) {
    this.length = array.length;

    if (this.length === 0) return;

    this.head = new ListNode(array[0]);
    this.tail = this.head;
    let currentNode = this.head;
    for (let i = 1; i < array.length; i++) {
      let node = new ListNode(array[i]);
      currentNode.next = node;
      currentNode = node;
    }
    this.tail = currentNode;
  }

  toString() {
    if (this.length === 0) return "[ ]";
    let out = "[";
    let currentNode = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      out += `${currentNode.val}, `;
      currentNode = currentNode.next;
    }
    out += `${currentNode.val}]`;
    return out;
  }
}
