import { mergeSort } from "../src/mergeSort";

describe("test merge sort function", () => {
  for (let i = 0; i < 10; i++) {
    let rand = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));
    let randCopy = rand;
    it("should return sorted array for " + rand, () => {
      expect(mergeSort(rand)).toStrictEqual(randCopy.sort((a, b) => a - b));
    });
  }
});
