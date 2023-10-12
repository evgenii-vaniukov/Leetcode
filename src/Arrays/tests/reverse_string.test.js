import {reverseString} from "../reverse_string";

describe("Testing Reverse Algorithm", () => {
  it("should return an array with one element when given an array with one element", () => {
    const input = ["h"];
    const expectedOutput = ["h"];
    expect(reverseString(input)).toEqual(expectedOutput);
  });

  it("should return an array with elements in reverse order when given an array with even number of elements", () => {
    const input = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"];
    const expectedOutput = ["d", "l", "r", "o", "w", "o", "l", "l", "e", "h"];
    expect(reverseString(input)).toEqual(expectedOutput);
  });

  it("should return an array with elements in reverse order when given an array with odd number of elements", () => {
    const input = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d", "!"];
    const expectedOutput = [
      "!",
      "d",
      "l",
      "r",
      "o",
      "w",
      "o",
      "l",
      "l",
      "e",
      "h",
    ];
    expect(reverseString(input)).toEqual(expectedOutput);
  });

  it("should return an empty array when given an empty array", () => {
    const input = [];
    const expectedOutput = [];
    expect(reverseString(input)).toEqual(expectedOutput);
  });
});
