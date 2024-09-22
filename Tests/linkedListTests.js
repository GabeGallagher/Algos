import { expect } from "chai";
import SinglyLinkedList from "../linkedList.js";

describe("To String", () => {
    let arrayToList = [1, 2, 3, 4, 5];
    let linkedList = new SinglyLinkedList(arrayToList);

    beforeEach(() => {
        linkedList = new SinglyLinkedList(arrayToList);
    })

    it("should print the string when toString method is called", () => {
        const linkedListString = linkedList.toString();
        expect(linkedListString).to.equal("[1, 2, 3, 4, 5]");
    });

    it("should print and empty strong when toString method is called on a linked list built with an empty array", () => {
        linkedList = new SinglyLinkedList([]);
        const linkedListString = linkedList.toString();
        expect(linkedListString).to.equal("[ ]");
    });
})