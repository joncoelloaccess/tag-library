import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-three-col-layout",
  styleUrl: "tag-three-col-layout.scss",
  shadow: true
})
export class TagThreeColLayout {
  /** Property description */
  @Prop() p1: string;
  render(): JSX.Element {
    return <slot />;
  }
}
