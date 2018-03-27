import { render, flush } from "@stencil/core/testing";
import { TagPayWp } from "./tag-pay-wp";
import { payWpFactory, PayWpStates } from "./tag-pay-wp.util";

describe("tag-pay-wp", () => {
  it("should build", () => {
    expect(new TagPayWp()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLElement;
    beforeEach(async () => {
      element = await render({
        components: [TagPayWp],
        html: '<tag-pay-wp dayofweek="Hello"></tag-pay-wp>'
      });
    });
    it("should render correctly", async () => {
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
    it("should cycle state from the default state", async () => {
      await flush(element);
      const btn: HTMLElement = element.querySelector("tag-button");
      btn.click();
      await flush(element);
      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});

describe("payWorkingPattern", () => {
  it("should exist", () => {
    expect(payWpFactory).not.toBeUndefined();
  });
  it("should return the initial value and false when zero", () => {
    const payWp = payWpFactory(PayWpStates.none);
    const result = payWp.value;
    expect(result).toEqual(PayWpStates.none);
  });
  it("should return the intial value and true when not zero", () => {
    const initialValue = PayWpStates.halfDay;
    const payWp = payWpFactory(initialValue);
    const result = payWp.value;
    expect(result).toEqual(initialValue);
  });
  it("should return the intial value + 1 and true when transitioned from zero", () => {
    const initialValue = PayWpStates.halfDay;
    const payWp = payWpFactory(initialValue);
    const result = payWp.transition().value;
    expect(result).toEqual(PayWpStates.fullDay);
  });
  it("should return the zero and false when transitioned from 2", () => {
    const initialValue = PayWpStates.fullDay;
    const payWp = payWpFactory(initialValue);
    const result = payWp.transition().value;
    expect(result).toEqual(PayWpStates.none);
  });
  it("should return the zero and false when transitioned multiple time from 1", () => {
    const initialValue = PayWpStates.halfDay;
    const payWp = payWpFactory(initialValue);
    const result = payWp.transition().transition().value;
    expect(result).toEqual(PayWpStates.none);
  });
  it("should return the 1 and true when transitioned multiple time from 2", () => {
    const initialValue = PayWpStates.fullDay;
    const payWp = payWpFactory(initialValue);
    const result = payWp.transition().transition().value;
    expect(result).toEqual(PayWpStates.halfDay);
  });
  it("should return the 1 and true when transitioned multiple with a break time from 2", () => {
    const initialValue = PayWpStates.fullDay;
    const payWp = payWpFactory(initialValue);
    payWp.transition();
    const result = payWp.transition().value;
    expect(result).toEqual(PayWpStates.halfDay);
  });
});
