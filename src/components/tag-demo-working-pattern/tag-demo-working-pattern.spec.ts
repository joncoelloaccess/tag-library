import { render, flush } from "@stencil/core/testing";
import { TagDemoWorkingPattern } from "./tag-demo-working-pattern";

describe.skip("tag-demo-working-pattern", () => {
  it("should build", () => {
    expect(new TagDemoWorkingPattern()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagDemoWorkingPattern],
        html: "<tag-demo-working-pattern></tag-demo-working-pattern>"
      });
      console.log("@");
    });
    it("snapshot test", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
