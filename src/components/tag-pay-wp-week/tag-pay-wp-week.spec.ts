import { render, flush } from "@stencil/core/testing";
import { TagPayWpWeek } from "./tag-pay-wp-week";

describe.skip("tag-pay-wp-week", () => {
  it("should build", () => {
    expect(new TagPayWpWeek()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagPayWpWeek],
        html: "<tag-pay-wp-week></tag-pay-wp-week>"
      });
      console.log("@");
    });
    it("snapshot test", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
