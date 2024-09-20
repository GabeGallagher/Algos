import { expect } from "chai";
import BinSearch from "../binSearch.js";

describe("Binary Search", () => {
  let app = new BinSearch();

  beforeEach(() => {
    app = new BinSearch();
  });

  it("returns index of target number in binary search", () => {
    const index = app.binSearch([0, 2, 3, 5, 7, 8, 10, 11, 15], 10);
    expect(index).to.equal(6);
  });

  it("returns true if target is in a 2d matrix", () => {
    const inMatrix = app.matrixSearch([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10);
    expect(inMatrix).to.equal(true);
  });

  it("returns false if target is not in a 2d matrix", () => {
    const inMatrix = app.matrixSearch([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 9);
    expect(inMatrix).to.equal(false);
  })

  it("Handles matrices of length 1", () => {
    const inMatrix = app.matrixSearch([[1, 3]], 3);
    expect(inMatrix).to.equal(true);
  })
});
