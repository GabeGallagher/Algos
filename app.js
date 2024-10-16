import SinglyLinkedList from "./linkedList.js";
import BinaryTree from "./binaryTree.js";
import TreeNode from "./tree.js";

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
    if (root === undefined || root === null) return root;
    root.left = this.invertTree(root.left);
    root.right = this.invertTree(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
  }

  maxDepth(root) {
    if (root === undefined || root === null) return 0;
    let leftDepth = this.maxDepth(root.left) + 1;
    let rightDepth = this.maxDepth(root.right) + 1;
    return leftDepth > rightDepth ? leftDepth : rightDepth;
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

  diameterOfBinaryTree(root) {
    let array = [0];
    this.heightOfBinTree(root, array);
    return array[0];
  }

  heightOfBinTree(root, array) {
    if (root === undefined || root === null) return 0;

    let leftHeight = 0;

    if (root.left !== null)
      leftHeight = this.heightOfBinTree(root.left, array) + 1;
    let rightHeight = 0;
    if (root.right !== null)
      rightHeight = this.heightOfBinTree(root.right, array) + 1;

    let localDiameter = leftHeight + rightHeight;
    array[0] = localDiameter > array[0] ? localDiameter : array[0];

    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

  isBalanced(root) {
    if (root === undefined || root === null) return true;
    let heightLeft = 0;
    let heightRight = 0;
    if (root.left !== null) heightLeft = this.checkHeight(root.left) + 1;
    if (root.right !== null) heightRight = this.checkHeight(root.right) + 1;
    if (heightLeft - heightRight > 1 || heightLeft - heightRight < -1)
      return false;
    return true;
  }

  checkHeight(root) {
    if (root === undefined || root === null) return 0;
    let heightLeft = 0;
    let heightRight = 0;
    if (root.left !== null) heightLeft = this.checkHeight(root.left) + 1;
    if (root.right !== null) heightRight = this.checkHeight(root.right) + 1;
    return heightLeft > heightRight ? heightLeft : heightRight;
  }

  isSameTree(p, q) {
    let pDefined = p !== undefined && p !== null;
    let qDefined = q !== undefined && q !== null;
    if (pDefined !== qDefined) return false;
    else if (!pDefined && pDefined === qDefined) return true;

    return (
      p.val === q.val &&
      this.isSameTree(p.left, q.left) &&
      this.isSameTree(p.right, q.right)
    );
  }

  isSubtree(root, subRoot) {
    let rootIsDefined = root !== undefined && root !== null;
    let subRootIsDefined = subRoot !== undefined && subRoot !== null;

    if (rootIsDefined !== subRootIsDefined) return false;
    else if (!rootIsDefined && rootIsDefined === subRootIsDefined) return true;

    if (root.val === subRoot.val && this.isSameTree(root, subRoot)) {
      return true;
    } else {
      if (this.isSubtree(root.left, subRoot)) return true;
      if (this.isSubtree(root.right, subRoot)) return true;
      return false;
    }
  }

  lowestCommonAncestor(root, p, q) {
    if (root === undefined || root === null) return root;
    let ancestorArray = [null];
    this.isRelative(root, p, q, ancestorArray, [false, false]);
    if (ancestorArray[0] === null) return root;
    else return ancestorArray[0];
  }

  isRelative(root, p, q, ancestorArray) {
    if (root === undefined || root === null) return false;

    let isP = root.val === p.val;
    let isQ = root.val === q.val;
    let isParent = isP || isQ;

    let isLeftRelative = this.isRelative(root.left, p, q, ancestorArray);
    let isRightRelative = this.isRelative(root.right, p, q, ancestorArray);
    if (isParent && (isLeftRelative || isRightRelative)) {
      if (ancestorArray[0] === null) ancestorArray[0] = root;
    }
    if (isLeftRelative && isRightRelative && ancestorArray[0] === null)
      ancestorArray[0] = root;

    if (isP || isQ) return true;
    else if (isLeftRelative || isRightRelative) return true;
    else return false;
  }

  levelOrder(root) {
    let array = [];
    this.levelArray(root, 0, array);
    return array;
  }

  levelArray(root, level, array) {
    if (root === undefined || root === null) return;
    if (array[level] === undefined) array[level] = [];
    array[level].push(root.val);
    this.levelArray(root.left, level + 1, array);
    this.levelArray(root.right, level + 1, array);
  }

  rightSideView(root) {
    let array = [];
    this.traverse(root, array, 0);
    return array;
  }

  traverse(root, array, level) {
    if (root === undefined || root === null) return;
    array[level] = root.val;
    this.traverse(root.left, array, level + 1);
    this.traverse(root.right, array, level + 1);
  }

  goodNodes(root) {
    if (root === undefined || root === null) return;
    let array = [];
    this.isGood(root, array, []);
    return array.length;
  }

  isGood(root, goodNodeArray, routeArray) {
    if (root === undefined || root === null) return;

    let isGoodBool = true;
    let updateRouteArray = [];

    for (let i = 0; i < routeArray.length; i++) {
      updateRouteArray.push(routeArray[i]);
      if (routeArray[i] > root.val) {
        isGoodBool = false;
      }
    }

    updateRouteArray.push(root.val);

    if (isGoodBool) {
      goodNodeArray.push(root.val);
      this.isGood(root.left, goodNodeArray, updateRouteArray);
      this.isGood(root.right, goodNodeArray, updateRouteArray);
    } else {
      this.isGood(root.left, goodNodeArray, updateRouteArray);
      this.isGood(root.right, goodNodeArray, updateRouteArray);
    }
  }

  isValidBST(root) {
    if (root === undefined || root === null) return true;
    return this.isValidBSTStruct(root);
  }

  isValidBSTStruct(root, leftBound = null, rightBound = null) {
    if (root === undefined || root === null) return true;
    let leftValid = leftBound === null || root.val > leftBound;
    if (!leftValid) return false;
    let rightValid = rightBound === null || root.val < rightBound;
    if(!rightValid) return false;

    let leftCheck = this.isValidBSTStruct(root.left, null, root.val);
    let rightCheck = this.isValidBSTStruct(root.right, root.val, null);

    return leftCheck && rightCheck;
  }

  kthSmallest(root, k) {
    let array = [];
    this.buildArray(root, array);
    array.sort((a, b) => a - b);
    return array[k - 1];
  }

  buildArray(root, array) {
    if (root === undefined || root === null) return;
    this.buildArray(root.left, array);
    this.buildArray(root.right, array);
    array.push(root.val);
  }

  minRemoveToMakeValid(s) {
    let sArray = [];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
      if(s[i] === "(") {
        sArray.push(s[i]);
        count++;
      }
      else if (s[i] === ")" && count > 0) {
        sArray.push(s[i]);
        count--;
      }
      else if (s[i] !== ")") {
        sArray.push(s[i]);
      }
    }
    let outArray = [];
    for (let i = sArray.length - 1; i >= 0; i--) {
      if (sArray[i] === "(" && count > 0) {
        count--;
      }
      else {
        outArray.push(sArray[i]);
      }
    }
    let output = '';
    for (let i = outArray.length - 1; i >= 0; i--) output += outArray[i];
    return output
  }
}
