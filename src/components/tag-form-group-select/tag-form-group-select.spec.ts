import { render, flush } from "@stencil/core/testing";
import { TagFormGroupSelect } from "./tag-form-group-select";

describe.skip("tag-form-group-select", () => {
  it("should build", () => {
    expect(new toPascalCase(name)()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagFormGroupSelect],
        html: "<tag-form-group-select></tag-form-group-select>"
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
