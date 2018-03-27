import { Component } from "@stencil/core";

@Component({
  tag: "tag-input-group",
  styleUrl: "tag-input-group.scss"
})
export class TagInputGroup {
  render() {
    return (
      <div class="input-group">
        <slot name="prefix" />
        <tag-input />
        <slot name="suffix" />
      </div>
    );
  }
}
