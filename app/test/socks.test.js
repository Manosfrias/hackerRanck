import {expect} from "chai";
import {sockMerchant} from "../src/socks";

describe("sockMerchant", function() {
  it("Calculate pairs of socks", function() {
    expect( sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20, 10]) ).to.equal(3);
  });
});
