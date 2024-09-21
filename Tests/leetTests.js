import { expect } from "chai";
import App from "../app.js";

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
