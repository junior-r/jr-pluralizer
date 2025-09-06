import { describe, it, expect } from "vitest";
import { pluralize } from "./index";

describe("pluralize", () => {
  it("pluraliza según número", () => {
    expect(pluralize("cat", 1)).toBe("cat");
    expect(pluralize("cat", 2)).toBe("cats");
    expect(pluralize("cat", 0)).toBe("cats");
  });

  it("pluraliza según string numérico", () => {
    expect(pluralize("dog", "1")).toBe("dog");
    expect(pluralize("dog", "5")).toBe("dogs");
    expect(pluralize("dog", "abc")).toBe("dogs"); // no numérico -> count = 0
  });

  it("pluraliza arrays", () => {
    expect(pluralize("item", [1])).toBe("item");
    expect(pluralize("item", [1, 2, 3])).toBe("items");
    expect(pluralize("item", [])).toBe("items");
  });

  it("pluraliza objetos", () => {
    expect(pluralize("key", { a: 1 })).toBe("key");
    expect(pluralize("key", { a: 1, b: 2 })).toBe("keys");
    expect(pluralize("key", {})).toBe("keys");
  });

  it("uso de sufijos personalizados", () => {
    expect(pluralize("child", 1, "ren", "child")).toBe("child");
    expect(pluralize("child", 2, "ren", "child")).toBe("children");
  });

  it("valores null o undefined", () => {
    expect(pluralize("thing", null)).toBe("things");
    expect(pluralize("thing", undefined)).toBe("things");
  });
});
