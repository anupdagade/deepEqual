const { expect } = require("chai");
const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  it("should return true given null, null", () => {
    expect(deepEqual(null, null)).to.equal(true);
  });

  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it("should return false given object, undefined", () => {
    expect(deepEqual({}, undefined)).to.equal(false);
  });

  it("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });

  it("should return true given two objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob", email: undefined })).to.equal(true);
  });

  it("should return false given two unequal objects with boolean", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob", email: 'test@test.com'  })).to.equal(false);
  });

  it("should return true given undefined, undefined", () => {
    expect(deepEqual({isBoolean: true}, {isBoolean: true, email: undefined})).to.equal(true);
  });

  it("should return true given two objects with number", () => {
    expect(deepEqual({number: 4}, {number: 4, email: undefined})).to.equal(true);
  });

  it("should return false given two objects", () => {
    expect(deepEqual({number: 4}, {number: 4, email: 'test@test.com'})).to.equal(false);
  });
});
