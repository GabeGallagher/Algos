import SinglyLinkedList from "./linkedList.js";
import BinaryTree from "./binaryTree.js";

export default class App {
  containsDuplicate(nums) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (numsMap.has(nums[i])) return true;
      else numsMap.set(nums[i], 1);
    }
    return false;
  }

  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    else if (s.length < 1) return false;

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
      if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
      else sMap.set(s[i], 1);
      if (tMap.has(t[i])) tMap.set(t[i], tMap.get(t[i]) + 1);
      else tMap.set(t[i], 1);
    }
    for (let key of sMap.keys()) {
      if (!tMap.has(key)) return false;
      if (sMap.get(key) !== tMap.get(key)) return false;
    }
    return true;
  }

  topKFrequent(nums, k) {
    let output = [];
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (numsMap.has(nums[i])) numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
      else numsMap.set(nums[i], 1);
    }
    for (let key of numsMap.keys()) {
      if (output.length < k) output.push(key);
      else {
        let val = key;
        for (let i = 0; i < output.length; i++) {
          if (numsMap.get(val) > numsMap.get(output[i])) {
            let temp = output[i];
            output[i] = val;
            val = temp;
          }
        }
      }
    }
    return output;
  }

  isValidParentheses(s) {
    if (s.length < 2 || s.length % 2 !== 0) return false;
    let parenMap = [")", "]", "}"];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (parenMap.includes(s[i])) {
        let check = stack.pop();
        switch (check) {
          case "(":
            if (s[i] !== ")") return false;
            break;
          case "[":
            if (s[i] !== "]") return false;
            break;
          case "{":
            if (s[i] !== "}") return false;
            break;
          default:
            return false;
        }
      } else {
        stack.push(s[i]);
      }
    }
    if (stack.length !== 0) return false;
    return true;
  }

  twoSum(numbers, target) {
    let front = 0;
    let back = numbers.length - 1;
    while (numbers[front] + numbers[back] !== target) {
      if (numbers[front] + numbers[back] < target) front++;
      else if (numbers[front] + numbers[back] > target) back--;
    }
    return [front, back];
  }

  maxProfit(prices) {
    let buy = 0;
    let sell = 1;
    let maxProf = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < prices[buy]) {
        buy = i;
        sell = i;
      }
      if (prices[i] > prices[sell]) sell = i;
      let newProf = prices[sell] - prices[buy];
      if (newProf > maxProf) maxProf = newProf;
    }
    return maxProf;
  }

  lengthOfLongestSubstring(s) {
    let substring = new Map();
    let out = 0;
    for (let i = 0; i < s.length; i++) {
      if (substring.has(s[i])) {
        if (out < substring.size) out = substring.size;
        let prevChar = s[i];
        while (s[i - 1] !== prevChar) i--;
        substring = new Map();
        substring.set(s[i], 1);
      } else substring.set(s[i], 1);
    }
    if (out < substring.size) out = substring.size;
    return out;
  }

  reverseList(array) {
    let linkedList = new SinglyLinkedList(array);
    let head = linkedList.head;
    let currentNode = head;
    let prev = null;

    while (currentNode) {
      let next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return prev;
  }

  reverseListRecursive(array) {
    let linkedList = new SinglyLinkedList(array);
    let head = linkedList.head;
    return this.recursiveReverseList(head, null);
  }

  recursiveReverseList(currentNode, prev) {
    if (!currentNode) return prev;
    else {
      let next = currentNode.next;
      currentNode.next = prev;
      return this.recursiveReverseList(next, currentNode);
    }
  }

  mergeTwoLists(list1, list2) {
    let head = null;
    let mergedList = null;

    while (list1 || list2) {
      if (!list2 || (list1 && list1.val <= list2.val)) {
        if (head === null) {
          let tempArray = [list1.val];
          mergedList = new SinglyLinkedList(tempArray);
          head = mergedList;
        } else {
          mergedList.next = list1;
          mergedList = mergedList.next;
        }
        list1 = list1.next;
      } else if (!list1 || (list2 && list1.val > list2.val)) {
        if (head === null) {
          let tempArray = [list2.val];
          mergedList = new SinglyLinkedList(tempArray);
          mergedList = list2;
          head = mergedList;
        } else {
          mergedList.next = list2;
          mergedList = mergedList.next;
        }
        list2 = list2.next;
      }
    }
    return head;
  }

  invertTree(root) {
    if (root === undefined || root.val === null) return root;
    if (root.left !== null && root.left.val !== null)
      this.invertTree(root.left);
    if (root.right !== null && root.right.val !== null)
      this.invertTree(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
  }

  maxDepth(root) {
    if (root === undefined || root === null) return 0;
    let leftDepth = this.maxDepth(root.left) + 1;
    let rightDepth = this.maxDepth(root.right) + 1;
    return Math.max(leftDepth, rightDepth);
  }

  maxDepthIterativeBreadth(root) {
    if (root === undefined || root === null) return 0;
    let lvl = 0;
    let queue = [root];
    while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        let currentNode = queue.shift();
        if (currentNode.left !== undefined && currentNode.left !== null)
          queue.push(currentNode.left);
        if (currentNode.right !== undefined && currentNode.right !== null)
          queue.push(currentNode.right);
      }
      lvl++;
    }
    return lvl;
  }

  maxDepthIterativeDepth(root) {
    if (root === undefined && root === null) return 0;
    let lvl = 0;
    let stack = [[root, 1]];
    while (stack.length > 0) {
      let dict = stack.pop();
      let currentNode = dict[0];
      lvl = Math.max(lvl, dict[1]);
      if (currentNode.left !== undefined && currentNode.left !== null)
        stack.push(currentNode.left, dict[1] + 1);
      if (currentNode.right !== undefined && currentNode.right !== null)
        stack.push(currentNode.right, dict[1] + 1);
    }
    return lvl;
  }
}
