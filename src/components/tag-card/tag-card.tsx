import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-card",
  styleUrl: "tag-card.scss",
  shadow: true
})
export class TagCard {
  @Prop() accent: string;
  render() {
    const cls = this.accent ? `card card-${this.accent.toLowerCase()}` : "card";
    return (
      <div class={cls}>
        <slot />
      </div>
    );
  }
}
