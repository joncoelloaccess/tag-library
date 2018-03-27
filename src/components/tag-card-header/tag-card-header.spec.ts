import { render, flush } from "@stencil/core/testing";
import { TagCardHeader } from "./tag-card-header";

describe.skip("tag-card-header", () => {
  it("should build", () => {
    //expect(new toPascalCase(name)()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagCardHeader],
        html: "<tag-card-header></tag-card-header>"
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
