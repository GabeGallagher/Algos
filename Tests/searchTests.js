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
});
