import { expect } from "chai";
import Sort from "../sorting.js";

function createArray(n, lb, ub) {
  let out = [];
  for (let i = 0; i < n; i++) {
    out.push(Math.floor(Math.random() * (ub - lb + 1)) + lb);
  }
  return out;
}

function runSortingTests(sortingMethod, sortingName) {
  describe("Sorting tests", () => {
    let sort;
    let testArray = createArray(100, -1000, 1000);
    let sortedArray = [...testArray].sort((a, b) => a - b);

    beforeEach(() => {
      sort = new Sort();
    });

    it(`should correctly sort an array using ${sortingName} sort`, () => {
      const mySortedArray = sortingMethod(testArray);
      expect(mySortedArray).to.deep.equal(sortedArray);
    });

    it(`should handle an already sorted array`, () => {
      const mySortedArray = sortingMethod(sortedArray);
      expect(mySortedArray).to.deep.equal(sortedArray);
    });

    it(`should handle an empty array`, () => {
      const mySortedArray = sortingMethod([]);
      expect(mySortedArray).to.deep.equal([]);
    });

    it(`should handle an array of length 1`, () => {
      const mySortedArray = sortingMethod([1]);
      expect(mySortedArray).to.deep.equal([1]);
    });

    it(`should handle an array with duplicates`, () => {
        let specialArray = [689, 702, 75, 81, 832, 849, 865, 867, 867, 872, 895, 895, 927, 929, 943, 982];
        const mySortedArray = sortingMethod(specialArray);
        expect(mySortedArray).to.deep.equal([75,81,689,702,832,849,865,867,867,872,895,895,927,929,943,982]);
    });
  });
}
const sortInstance = new Sort();
runSortingTests(sortInstance.bubble.bind(sortInstance), "bubble");
runSortingTests(sortInstance.merge.bind(sortInstance), "merge");
runSortingTests(sortInstance.quick.bind(sortInstance), "quick");
