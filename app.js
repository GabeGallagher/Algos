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
}
let app = new App();
console.log(app.lengthOfLongestSubstring("pwwkew"));
