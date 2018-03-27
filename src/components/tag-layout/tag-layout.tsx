import { Component } from "@stencil/core";

@Component({
  tag: "tag-layout",
  styleUrl: "tag-layout.scss",
  shadow: true
})
export class TagLayout {
  render() {
    return <slot />;
  }
}
