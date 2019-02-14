import { expect } from "chai";
import { compareTriplets } from "../src/compareTriplets";

describe("compareTriplets", function() {
  it("Compare two arrays", function() {
    const a = [5, 6, 7];
    const b = [3, 6, 10]
    expect( compareTriplets(a, b) ).to.be.an('array').to.deep.equal([1, 1]);
  });
});
