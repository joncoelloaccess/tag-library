import { render, flush } from "@stencil/core/testing";
import { TagInputCheckbox } from "./tag-input-checkbox";

describe.skip("tag-input-checkbox", () => {
  it("should build", () => {
    expect(new toPascalCase(name)()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagInputCheckbox],
        html: "<tag-input-checkbox></tag-input-checkbox>"
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
