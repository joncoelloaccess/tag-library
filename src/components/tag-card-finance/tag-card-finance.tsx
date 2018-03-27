import { Component, Prop } from "@stencil/core";
import { getStatusIconProps } from "./tag-card-finance.utils";

@Component({
  tag: "tag-card-finance",
  styleUrl: "tag-card-finance.scss",
  shadow: true
})
export class TagCardDocFinance {
  /** Heading used to communicate action */
  @Prop() heading: string;
  /** Main icon above heading  */
  @Prop() icon: string;
  /** Details of the action */
  @Prop() message: string;
  /** Identify the status of the action warning or success */
  @Prop() status: string;
  render() {
    const { heading, icon, message, status } = this;
    const tagIconProps = getStatusIconProps(status);
    const tagIcon = tagIconProps ? <tag-icon-set {...tagIconProps} /> : null;
    return (
      <tag-card>
        <div class="content">
          {tagIcon}
          <tag-icon-set class="info-icon" icon={icon} />
          <tag-text type="h2" inline class="content__heading">
            {heading}
          </tag-text>
          <tag-text type="default">{message}</tag-text>
          <hr />
        </div>
        <slot />
      </tag-card>
    );
  }
}
