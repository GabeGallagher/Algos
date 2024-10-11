import { expect } from "chai";
import TreeNode from "../tree.js";
import BinaryTree from "../binaryTree.js";

describe("Tree tests", () => {
  describe("Basic tree tests", () => {
    it("Should convert a tree into an array", () => {
      const testArray = [1, 2, 3, 4, 5, 6, 7];
      const binTree = new BinaryTree().buildBinaryTree(testArray);
      const binTreeArray = binTree.toArray();
      expect(binTreeArray).to.eql(testArray);
    });

    it("should print a valid, nicely formated, string", () => {
      const binTree = new BinaryTree().buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
      const binTreeString = binTree.toString();
      expect(binTreeString).to.eql("[1, 2, 3, 4, 5, 6, 7]");
    });
  });
});
