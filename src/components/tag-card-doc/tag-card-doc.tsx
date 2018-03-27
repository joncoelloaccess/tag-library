import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-card-doc",
  styleUrl: "tag-card-doc.scss",
  shadow: true
})
export class TagCardDoc {
  @Prop() heading: string;
  @Prop() action: string;
  @Prop() who: string;
  @Prop() whoref: string;
  @Prop() when: string;
  render() {
    const { heading, action, who, whoref, when } = this;
    return (
      <tag-card>
        <tag-text type="feature" inline>
          {heading}
        </tag-text>
        <span>
          {action} <a href={whoref}>{who}</a> {when}
        </span>
      </tag-card>
    );
  }
}
