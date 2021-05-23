import {add} from "../index"
import {inputLen} from "../module"

describe("example", () => {
  it("should be 42 with add", () => {
    expect<i32>(add(19, 23)).toBe(42, "19 + 23 is 42");
  });

  it("can call inputLen", () => {
    expect<i16>(inputLen(1)).toBe(1);
  })

});
