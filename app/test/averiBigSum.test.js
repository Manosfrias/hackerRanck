import { expect } from "chai";
import { aVeryBigSum } from "../src/aVeryBigSum";

describe("aVeryBigSum", function() {
  it("Sum all the elements in array", function() {
    const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    expect( aVeryBigSum(ar) ).to.equal(5000000015);
  });
});
