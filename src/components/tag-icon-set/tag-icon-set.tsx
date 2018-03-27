import { Component, Prop } from "@stencil/core";
import icons from "./tag-icons";

@Component({
  tag: "tag-icon-set",
  styleUrl: "tag-icon-set.scss",
  shadow: true
})
export class TagIconSet {
  /** The name of the icon */
  @Prop() icon: string;
  /** Set the fill colour of the icon */
  @Prop() accent: string;
  render() {
    const { icon, accent } = this;
    const cls = accent ? `icon--${accent.toLowerCase()}` : `icon--default`;
    return <span class={cls}>{icons[icon]}</span>;
  }
}
