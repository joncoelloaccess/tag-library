import { render, flush } from "@stencil/core/testing";
import { TagThreeColLayout } from "./tag-three-col-layout";

describe.skip("tag-three-col-layout", () => {
  it("should build", () => {
    expect(new TagThreeColLayout()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagThreeColLayout],
        html: "<tag-three-col-layout></tag-three-col-layout>"
      });
      console.log("@");
    });
    it("snapshot test", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
