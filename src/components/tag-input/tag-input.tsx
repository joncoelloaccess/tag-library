import { Component, Prop } from "@stencil/core";

@Component({
  tag: "tag-input",
  styleUrl: "tag-input.scss"
  // shadow: true
})
export class TagInput {
  @Prop() placeholder: string;
  @Prop() disabled: boolean;
  render() {
    return (
      <input type="text" class="form-control" placeholder={this.placeholder} />
    );
  }
}
