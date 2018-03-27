import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-badge",
  styleUrl: "tag-badge.scss",
  shadow: true
})
export class TagBadge {
  @Prop() accent: string;
  @Prop() value: string;
  render() {
    return <span>{this.value}</span>;
  }
}
