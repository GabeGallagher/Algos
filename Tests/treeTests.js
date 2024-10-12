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

    it("should correctly convert a heap into an array", () => {
        const maxHeap = new BinaryTree().buildMaxHeap([5, 12, 64, 1, 37, 90, 91, 97]);
        expect(maxHeap.toArray()).to.eql([97, 37, 91, 12, 5, 90, 64, 1]);
    })
  });

  describe("Binary Tree Tests", () => {
    it("build Max Heap should build a valid max heap", () => {
        const maxHeap = new BinaryTree().buildMaxHeap([5, 12, 64, 1, 37, 90, 91, 97]);
        expect(maxHeap.toString()).to.eql("[97, 37, 91, 12, 5, 90, 64, 1]");
    });
    
    it("build Min Heap should build a valid min heap", () => {
        const minxHeap = new BinaryTree().buildMinHeap([5, 12, 64, 1, 37, 90, 91, 97]);
        expect(minxHeap.toString()).to.eql("[1, 5, 64, 12, 37, 90, 91, 97]");
    });
  });
});
