export default class BinSearch {
  binSearch(nums, target) {
    let lb = 0;
    let ub = nums.length - 1;
    while (lb < ub) {
      let pointer = Math.floor((lb + ub) / 2);
      if (nums[pointer] === target) return pointer;
      else if (nums[pointer] < target) lb = pointer + 1;
      else ub = pointer - 1;
    }
  }

  matrixSearch(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      if (
        i === matrix.length - 1 ||
        (matrix[i][0] <= target && matrix[i + 1][0] > target)
      ) {
        if (matrix[i][0] === target) return true;
        let lb = 0;
        let ub = matrix[i].length - 1;
        while (lb <= ub) {
          let pointer = Math.floor((lb + ub) / 2);
          if (matrix[i][pointer] === target) return true;
          if (matrix[i][pointer] < target) lb = pointer + 1;
          else ub = pointer - 1;
        }
        return false;
      }
    }
  }
}
