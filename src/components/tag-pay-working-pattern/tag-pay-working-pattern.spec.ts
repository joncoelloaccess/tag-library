import { render, flush } from "@stencil/core/testing";
import { TagPayWorkingPattern } from "./tag-pay-working-pattern";

describe.skip("tag-pay-working-pattern", () => {
  it("should build", () => {
    expect(new TagPayWorkingPattern()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagPayWorkingPattern],
        html: "<tag-pay-working-pattern></tag-pay-working-pattern>"
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
