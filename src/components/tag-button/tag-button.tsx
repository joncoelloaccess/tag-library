import { Component, Prop } from "@stencil/core";
import { classBuilder } from "./utils";

export enum Size {
  default = "default",
  large = "large",
  small = "small",
  extraSmall = "extra-small"
}

@Component({
  tag: "tag-button",
  styleUrl: "tag-button.scss",
  shadow: true
})
export class TagButton {
  /** Colour of the button */
  @Prop() accent: string;
  @Prop() size: string;
  render() {
    return (
      <button class={classBuilder(this.accent, this.size)}>
        <slot />
      </button>
    );
  }
}
