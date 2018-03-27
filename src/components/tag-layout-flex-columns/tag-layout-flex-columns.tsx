import { Component } from "@stencil/core";

@Component({
  tag: "tag-layout-flex-columns",
  styleUrl: "tag-layout-flex-columns.scss",
  shadow: true
})
export class TagLayoutFlexColumns {
  render() {
    return <slot />;
  }
}
