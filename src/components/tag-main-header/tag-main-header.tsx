import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-main-header",
  styleUrl: "tag-main-header.scss",
  shadow: true
})
export class TagMainHeader {
  @Prop() accent: string;
  render() {
    const props: any = {};
    const { accent } = this;
    if (accent) {
      props.class = this.accent ? `aside-${this.accent.toLowerCase()}` : "";
    }
    return (
      <header {...props}>
        <slot />
      </header>
    );
  }
}
