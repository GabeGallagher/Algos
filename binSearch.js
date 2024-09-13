class BinSearch {
  search(nums, target) {
    let lb = 0;
    let ub = nums.length - 1;
    while (lb < ub) {
      let pointer = Math.floor((lb + ub) / 2);
      if (nums[pointer] === target) return pointer;
      else if (nums[pointer] < target) lb = pointer + 1;
      else ub = pointer - 1;
    }
  }
}

module.exports = BinSearch;
