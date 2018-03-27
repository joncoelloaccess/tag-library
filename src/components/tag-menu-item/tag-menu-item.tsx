import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-menu-item",
  styleUrl: "tag-menu-item.scss",
  shadow: true
})
export class TagButton {
  /** The icon used to the left of the item text */
  @Prop() i: string;
  render() {
    const { i } = this;
    console.log("icon", i, this);
    return (
      <span>
        <tag-icon-set icon={i} />{" "}
        <span class="item__label">
          <slot />
        </span>
      </span>
    );
  }
}
