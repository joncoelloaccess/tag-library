import { Component, Prop } from "@stencil/core";

type AvatarProps = {
  class: string;
  style?: {
    backgroundImage?: string;
  };
};

@Component({
  tag: "tag-avatar",
  styleUrl: "tag-avatar.scss",
  shadow: true
})
export class TagAvatar {
  /** placeholder text when there is no image */
  @Prop() placeholder: string;
  /** size of the avatar: default 45px small 36px */
  @Prop() size: string;
  /** source of the avatar image */
  @Prop() src: string;
  render() {
    const { src, placeholder, size } = this;
    const placeholderText = src ? "\u00a0" : placeholder;
    const avatarProps: AvatarProps = {
      class: `avatar ${size}`
    };
    if (src) {
      avatarProps.style.backgroundImage = `url(${src})`;
    }
    return <div {...avatarProps}>{placeholderText}</div>;
  }
}
