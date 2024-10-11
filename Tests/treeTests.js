import { expect } from "chai";
import BinaryTree from "../tree.js";

describe("Tree tests", () => {
  it("Should convert a tree into an array", () => {
    const binTree = new BinaryTree([1, 2, 3, 4, 5, 6, 7]);
    const binTreeArray = binTree.toArray();
    expect(binTreeArray).to.equal([1, 2, 3, 4, 5, 6, 7]);
  });
});
