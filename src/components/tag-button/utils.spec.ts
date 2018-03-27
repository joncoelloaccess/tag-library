import { classBuilder } from "./utils";

describe("class builder", () => {
  it("default class", () => {
    expect(classBuilder(undefined, undefined)).toBe("btn");
  });
  it("with accent", () => {
    expect(classBuilder("Access", undefined)).toBe("btn btn__accent--access");
  });
  it("with size", () => {
    expect(classBuilder(undefined, "large")).toBe("btn btn__size--large");
  });
  it("with accent and size", () => {
    expect(classBuilder("Access", "large")).toBe(
      "btn btn__accent--access btn__size--large"
    );
  });
});
