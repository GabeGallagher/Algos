import { expect } from "chai";
import App from "../app.js";
import SinglyLinkedList from "../linkedList.js";
import BinaryTree from "../binaryTree.js";

describe("Contains duplicate", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return true if an array contains duplicates", () => {
    const containsDuplicateTest = app.containsDuplicate([1, 2, 3, 1]);
    expect(containsDuplicateTest).to.equal(true);
  });

  it("should return false if an array does not contains duplicates", () => {
    const containsDuplicateTest = app.containsDuplicate([1, 2, 3, 4]);
    expect(containsDuplicateTest).to.equal(false);
  });

  it("should return false if an array is empty", () => {
    const containsDuplicateTest = app.containsDuplicate([]);
    expect(containsDuplicateTest).to.equal(false);
  });

  it("should return false if an array is of length 1", () => {
    const containsDuplicateTest = app.containsDuplicate([1]);
    expect(containsDuplicateTest).to.equal(false);
  });
});

describe("Is anagram", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("Should return true if strings are an anagram", () => {
    const isAnagramTest = app.isAnagram("anagram", "nagaram");
    expect(isAnagramTest).to.equal(true);
  });

  it("should return false if not anagrams", () => {
    const isAnagramTest = app.isAnagram("rat", "car");
    expect(isAnagramTest).to.equal(false);
  });

  it("should return false if empty strings", () => {
    const isAnagramTest = app.isAnagram("", "");
    expect(isAnagramTest).to.equal(false);
  });
});

describe("K most frequent", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return an array of the top 2 most frequent values", () => {
    const mostFrequentArray = app.topKFrequent([1, 1, 1, 2, 2, 3], 2);
    const doesContain =
      mostFrequentArray.includes(1) && mostFrequentArray.includes(2);
    expect(doesContain).to.equal(true);
  });
});

describe("Is Valid Parentheses", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return true if all parentheses properly close", () => {
    const isValid = app.isValidParentheses("([{}])");
    expect(isValid).to.equal(true);
  });

  it("should return true when proper parentheses dont encase each other", () => {
    const isValid = app.isValidParentheses("()[]{}");
    expect(isValid).to.equal(true);
  });

  it("should return false if all parentheses dont properly close", () => {
    const isValid = app.isValidParentheses("[(])");
    expect(isValid).to.equal(false);
  });

  it("should return false if string length less than two", () => {
    const isValid = app.isValidParentheses("[");
    expect(isValid).to.equal(false);
  });

  it("should return false if an even string contains more opening parens", () => {
    const isValid = app.isValidParentheses("[[");
    expect(isValid).to.equal(false);
  });

  it("should return false if an even string contains more closing parens", () => {
    const isValid = app.isValidParentheses("))");
    expect(isValid).to.equal(false);
  });
});

describe("Two sum", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return the indices of the two numbers that sum to the target", () => {
    const twoSum = app.twoSum([0, 2, 3, 5, 7, 8, 10, 11, 15], 9);
    const testBool = twoSum[0] === 1 && twoSum[1] === 4 ? true : false;
    expect(testBool).to.equal(true);
  });
});

describe("Max profit", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return max profit", () => {
    const profit = app.maxProfit([2, 4, 1]);
    expect(profit).to.equal(2);
  });

  it("should return max profit 0 if there are no profits", () => {
    const profit = app.maxProfit([7, 6, 4, 3, 1]);
    expect(profit).to.equal(0);
  });
});

describe("Length of longest substring", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return length of longest substring without a repeating character", () => {
    const length = app.lengthOfLongestSubstring("pwwkew");
    expect(length).to.equal(3);
  });

  it("should return expected output while accounting for spaces as characters", () => {
    const length = app.lengthOfLongestSubstring(" ");
    expect(length).to.equal(1);
  });

  it("should return the proper substring length when the next substring doesn't start immediately after the repeated character", () => {
    const length = app.lengthOfLongestSubstring("dvdf");
    expect(length).to.equal(3);
  });
});

describe("Merge two sorted linked lists", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  it("should return head of newly sorted linked lists", () => {
    const list1 = new SinglyLinkedList([1, 2, 4]);
    const list2 = new SinglyLinkedList([1, 3, 4]);
    const mergedList = app.mergeTwoLists(list1, list2);
    expect(mergedList.val).to.equal(1);
  });
});

describe("Binary Tree Tests", () => {
  let app = new App();

  beforeEach(() => {
    app = new App();
  });

  describe("Inverted binary tree", () => {
    it("should invert tree when given valid binary tree", () => {
      const binTree = new BinaryTree().buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
      const invertedTree = app.invertTree(binTree);
      const testArray = invertedTree.toArray();
      expect(testArray).to.eql([1, 3, 2, 7, 6, 5, 4]);
    });

    it("should handle an empty tree", () => {
      const binTree = new BinaryTree().buildBinaryTree([]);
      const invertedTree = app.invertTree(binTree);
      expect(invertedTree).to.eql(binTree);
    });
  });

  describe("Max tree Depth", () => {
    it("should calculate tree depth of a binary tree", () => {
      const binTree = new BinaryTree().buildBinaryTree([
        1,
        2,
        3,
        null,
        null,
        4,
      ]);
      const treeDepth = app.maxDepth(binTree);
      expect(treeDepth).to.eql(3);
    });

    it("should handle an empty tree", () => {
      const binTree = new BinaryTree().buildBinaryTree([]);
      const treeDepth = app.maxDepth(binTree);
      expect(treeDepth).to.eql(0);
    });
  });

  describe("Diameter of binary tree", () => {
    it("should return correct diameter of binary tree", () => {
      const binaryTree = new BinaryTree().buildBinaryTree([
        1,
        null,
        2,
        3,
        4,
        5,
      ]);
      const treeDiameter = app.diameterOfBinaryTree(binaryTree);
      expect(treeDiameter).to.eql(3);
    });

    it("should handle an empty tree", () => {
      const binaryTree = new BinaryTree().buildBinaryTree([]);
      const treeDiameter = app.diameterOfBinaryTree(binaryTree);
      expect(treeDiameter).to.eql(0);
    });
  });

  describe("Is binary tree balanced", () => {
    it("should be balanced if left and right height of node have less than a difference of one", () => {
      const binaryTree = new BinaryTree().buildBinaryTree([1,2,3,null,null,4]);
      const isBalanced = app.isBalanced(binaryTree);
      expect(isBalanced).to.eql(true);
    });
    
    it("should be balanced if tree is empty", () => {
      const binaryTree = new BinaryTree().buildBinaryTree([]);
      const isBalanced = app.isBalanced(binaryTree);
      expect(isBalanced).to.eql(true);
    });
    
    it("should not be balanced if left and right height of node have more than a difference of one", () => {
      const binaryTree = new BinaryTree().buildBinaryTree([1,2,3,null,null,4,null,5]);
      const isBalanced = app.isBalanced(binaryTree);
      expect(isBalanced).to.eql(false);
    });
  });

  describe("Is same tree", () => {
    it("Should be true if both trees share the same structure and node values", () => {
      const binaryTreeOne = new BinaryTree().buildBinaryTree([1, 2, 3]);
      const binaryTreeTwo = new BinaryTree().buildBinaryTree([1, 2, 3]);
      const isSame = app.isSameTree(binaryTreeOne, binaryTreeTwo);
      expect(isSame).to.eql(true);
    });

    it("Should work if one tree is empty", () => {
      const binaryTreeOne = new BinaryTree().buildBinaryTree([]);
      const binaryTreeTwo = new BinaryTree().buildBinaryTree([1, 2, 3]);
      const isSame = app.isSameTree(binaryTreeOne, binaryTreeTwo);
      expect(isSame).to.eql(false);
    });

    it("Should work with properly disimilar trees", () => {
      const binaryTreeOne = new BinaryTree().buildBinaryTree([4, 7]);
      const binaryTreeTwo = new BinaryTree().buildBinaryTree([4, null, 7]);
      const isSame = app.isSameTree(binaryTreeOne, binaryTreeTwo);
      expect(isSame).to.eql(false);
    });

    it("Should work with an empty tree and a tree with value of 0", () => {
      const binaryTreeOne = new BinaryTree().buildBinaryTree([]);
      const binaryTreeTwo = new BinaryTree().buildBinaryTree([0]);
      const isSame = app.isSameTree(binaryTreeOne, binaryTreeTwo);
      expect(isSame).to.eql(false);
    });
  })
});
