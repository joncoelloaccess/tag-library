import { render, flush } from "@stencil/core/testing";
import { TagLayoutFlexColumns } from "./tag-layout-flex-columns";

describe.skip("tag-layout-flex-columns", () => {
  it("should build", () => {
    expect(new toPascalCase(name)()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagLayoutFlexColumns],
        html: "<tag-layout-flex-columns></tag-layout-flex-columns>"
      });
      console.log("@");
    });
    it("should work with both the first and the last name", async () => {
      // console.log("$", element);
      // // element.first = "Peter";
      // // element.last = "Parker";
      // await flush(element);
      // expect(element.textContent).toEqual("Hello, my name is Peter Parker");
    });
  });
});
