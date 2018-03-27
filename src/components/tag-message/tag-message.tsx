import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-message",
  styleUrl: "tag-message.scss",
  shadow: true
})
export class TagMessage {
  @Prop() accent: string;
  render() {
    const props: any = {};
    const { accent } = this;
    if (accent) {
      props.class = this.accent ? `aside-${this.accent.toLowerCase()}` : "";
    }
    return (
      <aside {...props}>
        <slot />
      </aside>
    );
  }
}
