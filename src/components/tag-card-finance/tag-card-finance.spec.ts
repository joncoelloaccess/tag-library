import { getStatusIconProps } from "./tag-card-finance.utils";

describe("get status", () => {
  test("should return warning, when warning passed in", () => {
    const result = getStatusIconProps("warning");
    expect(result.i).toBe("Warning");
    expect(result.class).toContain("warning");
  });
  test("should return success, when success passed in", () => {
    const result = getStatusIconProps("success");
    expect(result.i).toBe("Tick");
    expect(result.class).toContain("success");
  });
  test("should return success, ignoring case when SUCCESS passed in", () => {
    const result = getStatusIconProps("SUCCESS");
    expect(result.i).toBe("Tick");
    expect(result.class).toContain("success");
  });
  test("should return undefined, when passing in incorrect status", () => {
    expect(getStatusIconProps("warningggg")).toBeUndefined();
    expect(getStatusIconProps(null)).toBeUndefined();
  });
});
