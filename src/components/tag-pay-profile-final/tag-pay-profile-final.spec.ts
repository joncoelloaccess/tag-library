import { render, flush } from "@stencil/core/testing";
import { TagPayProfileFinal } from "./tag-pay-profile-final";

describe.skip("tag-pay-profile-final", () => {
  it("should build", () => {
    expect(new toPascalCase(name)()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagPayProfileFinal],
        html: "<tag-pay-profile-final></tag-pay-profile-final>"
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
