import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-card-header",
  styleUrl: "tag-card-header.scss",
  shadow: true
})
export class TagCardHeader {
  /** Heading text */
  @Prop() heading: string;
  render() {
    return (
      <tag-card>
        {/* <div class="tch__content"> */}
        <tag-text type="h4">{this.heading}</tag-text>
        <hr />
        <slot />
        {/* </div> */}
      </tag-card>
    );
  }
}
