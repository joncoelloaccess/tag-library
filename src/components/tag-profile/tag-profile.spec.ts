import { render, flush } from "@stencil/core/testing";
import { TagProfile } from "./tag-profile";

const renderElement = async (html: string): Promise<HTMLElement> => {
  return await render({
    components: [TagProfile],
    html: html
  });
};

describe("tag-profile", () => {
  it("should build", () => {
    expect(new TagProfile()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLElement;
    beforeEach(async () => {
      element = await render({
        components: [TagProfile],
        html: "<tag-profile></tag-profile>"
      });
    });
    it("should render", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
    it("should render everything", async () => {
      const element: HTMLElement = await render({
        components: [TagProfile],
        html: `<tag-profile
          name="Kevin Anderson"
          gender="Male"
          dob="08/Aug/1982"
          nationality="British"
          src="http://ux.accessacloud.com/StyleGuide/Live/Content/img/rachel.jpg"
        ></tag-profile>`
      });
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
  describe("edit events", () => {
    it("should emit a 'edit profile' event", async () => {
      // const dummyFn = jest.fn();
      // const element = await renderElement("<tag-profile></tag-profile>");
      // element.addEventListener("editProfileImage", dummyFn);
      // await flush(element);
      // const edit = element.querySelector<HTMLElement>(".prof__edit");
      // edit.click();
      // setTimeout(() => {
      //   expect(dummyFn).not.toHaveBeenCalled();
      // }, 50);
    });
  });
});
