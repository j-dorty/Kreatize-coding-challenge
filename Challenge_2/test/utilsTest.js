const { expect } = require("chai");
const utils = require("../utils");

describe("Test IsNaturalNumber", () => {
  it("Should return false if number is not a natural number", async () => {
    expect(utils.isNaturalNum(-1)).to.equal(false);
    expect(utils.isNaturalNum(1.5)).to.equal(false);
    expect(utils.isNaturalNum(0)).to.equal(false);
  });

  it("Should return true if number is  a natural number", async () => {
    expect(utils.isNaturalNum(1)).to.equal(true);
    expect(utils.isNaturalNum(2)).to.equal(true);
    expect(utils.isNaturalNum(90009300209)).to.equal(true);
  });
});

describe("Test lowestCommonMultiple", () => {
  it("Should return correct value", async () => {
    expect(utils.lowestCommonMultiple([1, 2, 3])).to.equal(6);
    expect(utils.lowestCommonMultiple([7, 8, 9])).to.equal(504);
    expect(utils.lowestCommonMultiple([700, 827, 90190])).to.equal(5221099100);
  });
});

describe("Test formatResponsestring", () => {
  it("Should return correct value", async () => {
    expect(utils.formatResponsestring([1, 2, 3], 6)).to.equal(
      "The LCM of 1,2 and 3 is 6"
    );
    expect(utils.formatResponsestring([7, 8, 9], 504)).to.equal(
      "The LCM of 7,8 and 9 is 504"
    );
    expect(utils.formatResponsestring([700, 827, 90190], 5221099100)).to.equal(
      "The LCM of 700,827 and 90190 is 5221099100"
    );
  });
});
