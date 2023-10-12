import {reverseString} from "../reverse_string";

describe("Testing Reverse Algorithm", () => {
  it("Array with multiple elements", () => {
    const Array = ["h", "e", "l", "l", "o"];
    expect(reverseString(Array)).toEqual(["o", "l", "l", "e", "h"]);
  });
});
