import { Component, Prop } from "@stencil/core";

// enum Typeography {
//   h1 = "h1",
//   h2 = "h2",
//   h3 = "h3",
//   h4 = "h4",
//   h5 = "h5",
//   feature = "feature",
//   small = "small",
//   min = "min"
// }

const getTextType = type => {
  switch (type) {
    case "h1":
      return (
        <h1>
          <slot />
        </h1>
      );
    case "h2":
      return (
        <h2>
          <slot />
        </h2>
      );
    case "h3":
      return (
        <h3>
          <slot />
        </h3>
      );
    case "h4":
      return (
        <h4>
          <slot />
        </h4>
      );
    case "h5":
      return (
        <h5>
          <slot />
        </h5>
      );
    case "small":
      return (
        <small>
          <slot />
        </small>
      );
    default:
      return (
        <p>
          <slot />
        </p>
      );
  }
};

@Component({
  tag: "tag-text",
  styleUrl: "tag-text.scss",
  shadow: true
})
export class TagText {
  /** The type of the string can be: h1, h2, h3, h4, h5, feature, small, min, value */
  @Prop() type: string;
  /** Treat text as inline and remove block and margin from text */
  @Prop() inline: boolean;
  render() {
    const { inline, type } = this;
    return inline ? <slot /> : getTextType(type);
  }
}
