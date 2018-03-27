import { render, flush } from "@stencil/core/testing";
import { TagPayProfileStore } from "./tag-pay-profile-store";

describe.skip("tag-pay-profile-store", () => {
  it("should build", () => {
    expect(new TagPayProfileStore()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagPayProfileStore],
        html: "<tag-pay-profile-store></tag-pay-profile-store>"
      });
      console.log("@");
    });
    it("snapshot test", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
