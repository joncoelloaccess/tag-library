import { render, flush } from "@stencil/core/testing";
import { TagAvatar } from "./tag-avatar";

describe("tag-avatar", () => {
  it("should build", () => {
    expect(new TagAvatar()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagAvatar],
        html: "<tag-avatar></tag-avatar>"
      });
      console.log("@");
    });
    it("should render", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
