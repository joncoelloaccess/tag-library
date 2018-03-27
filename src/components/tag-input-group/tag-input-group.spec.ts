import { render, flush } from "@stencil/core/testing";
import { TagInputGroup } from "./tag-input-group";

describe.skip("tag-input-group", () => {
  it("should build", () => {
    expect(new toPascalCase(name)()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagInputGroup],
        html: "<tag-input-group></tag-input-group>"
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
