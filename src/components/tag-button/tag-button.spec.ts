import { render, flush } from "@stencil/core/testing";
import { TagButton } from "./tag-button";

describe.skip("my-app", () => {
  it("should build", () => {
    expect(new TagButton()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagButton],
        html: "<tag-button></tag-button>"
      });
      console.log("@");
    });
    it("should work with both the first and the last name", async () => {
      console.log("$", element);
      // element.first = "Peter";
      // element.last = "Parker";
      await flush(element);
      expect(element.textContent).toEqual("Hello, my name is Peter Parker");
    });
  });
});
