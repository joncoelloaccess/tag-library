import { render, flush } from "@stencil/core/testing";
import { TagKendoFormGroupSelect } from "./tag-kendo-form-group-select";

describe.skip("tag-kendo-form-group-select", () => {
  it("should build", () => {
    expect(new TagKendoFormGroupSelect()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TagKendoFormGroupSelect],
        html: "<tag-kendo-form-group-select></tag-kendo-form-group-select>"
      });
      console.log("@");
    });
    it("snapshot test", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
