const { expect } = require("chai");
const code = require("./script.js");

describe("isRelevant", () => {
  const paragraph = "The quick brown fox jumps over the lazy dog";

  it("returns a boolean value", () => {
    const result = code.isRelevant(["cat", "Fox"], paragraph);
    expect(result).to.be.a("boolean");
  });

  it("returns true if the paragraph contains any of the given topics", () => {
    const result = code.isRelevant(["cat", "Fox"], paragraph);
    expect(result).to.equal(true);
  });

  it("returns false if the paragraph does not contain any of the given topics", () => {
    const result = code.isRelevant(["cat", "kitten"], paragraph);
    expect(result).to.equal(false);
  });

  it("topics are case insensitive", () => {
    const result = code.isRelevant(["cat", "Fox"], paragraph);
    expect(result).to.equal(true);
  });
});

describe("about", () => {
  it("returns a function", () => {
    const result = code.about(["cat", "kitten", "cats"]);
    expect(result).to.be.a("function");
  });

  it("returns false when you invoke the returned function with a string of paragraph and the paragraph does not contain any of the given topics", () => {
    const topics = ["cat", "kitten", "cats"];
    const paragraph = "The quick brown fox jumps over the lazy dog.";
    const result = code.about(topics)(paragraph);
    expect(result).to.equal(false);
  });

  it("returns true when you invoke the returned function with a string of paragraph and the paragraph contains any of the given topics", () => {
    const topics = ["cat", "kitten", "cats"];
    const paragraph = "The quick brown cat jumps over the lazy dog.";
    const result = code.about(topics)(paragraph);
    expect(result).to.equal(true);
  });
});

/* Write your tests for other functions here */
